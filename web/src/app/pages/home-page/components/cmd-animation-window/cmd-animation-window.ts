import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cmd-animation-window',
  imports: [],
  templateUrl: './cmd-animation-window.html',
  styleUrl: './cmd-animation-window.scss',
})
export class CmdAnimationWindow implements OnInit{


  animationRunning = input(true);

  body: HTMLElement | null = null;

  async ngOnInit() {
    this.body = document.getElementById('terminalBody');

    await this.mainLoop();
  }


  /* Hilfsfunktionen */
  wait(ms: any){ return new Promise(r => setTimeout(r, ms)); }

  /* Erzeuge eine neue Zeile mit prompt + spans für typed text und cursor */
  createPromptLine(promptText: any){
    const line = document.createElement('div');
    line.className = 'line';

    const promptSpan = document.createElement('span');
    promptSpan.className = 'prompt';
    promptSpan.textContent = promptText + ' ';

    const typedSpan = document.createElement('span');
    typedSpan.className = 'typed';
    typedSpan.setAttribute('aria-hidden','true');

    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.classList.add('blink');
    cursor.setAttribute('aria-hidden','true');

    line.appendChild(promptSpan);
    line.appendChild(typedSpan);
    line.appendChild(cursor);

    return { line, promptSpan, typedSpan, cursor };
  }

  /* Typewriter: fügt Zeichen in targetSpan ein und lässt cursor sichtbar bleiben */
  async typeToSpan(targetSpan: any, text: any, speed = 50, invertCursorWhileTyping = false){
    const cursor = targetSpan.nextSibling; // erwartet cursor direkt danach
    // optional: invert cursor style while typing (outline)
    if(invertCursorWhileTyping && cursor) cursor.classList.add('invert');

    cursor.classList.remove('blink');

    for(const ch of text){
      targetSpan.textContent += ch;
      await this.wait(speed);
    }

    if(invertCursorWhileTyping && cursor) cursor.classList.remove('invert');
  }

  /* Erzeuge reine Text-Zeile (ohne prompt), mit einem cursor am Ende */
  createOutputLine(){
    const outLine = document.createElement('div');
    outLine.className = 'line';
    const outSpan = document.createElement('span');
    outSpan.className = 'typed';
    outSpan.setAttribute('aria-hidden','true');

    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.setAttribute('aria-hidden','true');

    outLine.appendChild(outSpan);
    outLine.appendChild(cursor);
    return { outLine, outSpan, cursor };
  }

  /* Hauptloop */
  async mainLoop(){
    const PROMPT = 'florian@ubuntu:~$';
    const COMMAND = 'whoami';
    const OUTPUT = `>>> Florian Kaiser <<<
[Master Student in Computer Science]
[Full-Stack Dev | Embedded Systems]
[Languages: C, C++, C#, Python, MicroPython, Lua, Java/Kotlin, JS/TS]
[Skills & Tools: Angular | .NET | Docker | CI/CD | Postgres]
[Currently working on: Paper about generic embedded RPC middleware]`;


    while(this.animationRunning()){
      try {
        if (!this.body) continue;

        // clear screen (simuliert)
        this.body.innerHTML = '';

        // Erstelle prompt-line mit sichtbarem cursor
        const { line, typedSpan, cursor } = this.createPromptLine(PROMPT);
        this.body.appendChild(line);

        // 1) Anfangs-Blink: Cursor blinkt einige Sekunden neben leerem Prompt
        await this.wait(1400); // hier blinkt der Kasten sichtbar

        // 2) Tippen des Befehls (cursor bleibt sichtbar). Optional invert cursor while typing.
        await this.typeToSpan(typedSpan, COMMAND, 150, true);

        // kurze Pause nach Eingabe
        await this.wait(500);

        // Entferne den cursor von der Eingabezeile (oder lasse ihn stehen) - wir erstellen eine neue Zeile für die Ausgabe
        if(cursor && cursor.parentNode) cursor.parentNode.removeChild(cursor);

        // 3) Neue Zeile: Ausgabe mit eigenem cursor
        const { outLine, outSpan } = this.createOutputLine();
        // Neue Zeile einfügen
        this.body.appendChild(outLine);

        // Tippe die Ausgabe (typewriter)
        await this.typeToSpan(outSpan, OUTPUT, 35, false);

        // Nach der Ausgabe: Pause damit man den Text liest
        await this.wait(1700);

        if (!outSpan) continue;
        outSpan.nextSibling?.remove(); // entferne den cursor nach der Ausgabe

        // neue leere Prompt-Zeile nach der Ausgabe
        const newPrompt = this.createPromptLine(PROMPT);
        const spacer = document.createElement('div');
        spacer.style.height = "20px";
        this.body.appendChild(spacer);

        this.body.appendChild(newPrompt.line);


        // 1) Anfangs-Blink: Cursor blinkt einige Sekunden neben leerem Prompt
        await this.wait(2500); // hier blinkt der Kasten sichtbar

        await this.typeToSpan(newPrompt.typedSpan, 'clear', 150, true);

        // kurze Pause nach Eingabe
        await this.wait(500);

        this.body.innerHTML = '';
      }catch (e) {
        console.error('Error in CMD animation loop:', e);
      }
    }
  }
}

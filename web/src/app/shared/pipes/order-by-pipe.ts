import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform<T>(
    value: T[],
    field: keyof T,
    direction: 'asc' | 'desc' = 'asc'
  ): T[] {
    if (!Array.isArray(value) || !field) {
      return value;
    }

    const sorted = [...value].sort((a: any, b: any) => {
      const valA = a[field];
      const valB = b[field];

      if (valA == null) return 1;
      if (valB == null) return -1;

      if (typeof valA === 'string' && typeof valB === 'string') {
        return valA.localeCompare(valB);
      }

      if (valA > valB) return 1;
      if (valA < valB) return -1;
      return 0;
    });

    return direction === 'desc' ? sorted.reverse() : sorted;
  }

}

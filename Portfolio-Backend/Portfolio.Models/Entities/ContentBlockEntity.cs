namespace Portfolio.Models.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("blocks")]
public class ContentBlockEntity
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    public Guid ParentId { get; set; }

    [ForeignKey(nameof(ParentId))]
    public ContentEntity Parent { get; set; } = null!;

    [Required]
    public ContentBlockType Type { get; set; }

    [Required]
    public string Content { get; set; } = null!;
    
    public int Order { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

public enum ContentBlockType
{
    Text = 0,
    Image = 1,
    Code = 2
}

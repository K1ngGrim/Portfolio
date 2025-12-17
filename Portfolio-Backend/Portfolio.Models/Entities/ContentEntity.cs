namespace Portfolio.Models.Entities;

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("content")]
public class ContentEntity
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    [MaxLength(200)]
    public string Name { get; set; } = null!;

    [MaxLength(500)]
    public string? Description { get; set; }

    [Required]
    [MaxLength(200)]
    public string Slug { get; set; } = null!;

    [Required]
    public ContentStatus Status { get; set; } = ContentStatus.Draft;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    public DateTime? PublishedAt { get; set; }

    // Navigation
    public ICollection<ContentBlockEntity> Blocks { get; set; }
        = new List<ContentBlockEntity>();
}

public enum ContentStatus
{
    Draft = 0,
    Published = 1,
    Archived = 2
}

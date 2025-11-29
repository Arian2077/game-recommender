from django.db import models

class Genre(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Game(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    genres = models.ManyToManyField(Genre, related_name="games")
    tags = models.TextField(blank=True)  # comma-separated tags for simple ML
    rating = models.FloatField(default=0)

    def __str__(self):
        return self.title

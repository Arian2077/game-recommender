from rest_framework import serializers
from .models import Game, Genre

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'name']

class GameSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True)

    class Meta:
        model = Game
        fields = ['id', 'title', 'description', 'genres', 'tags', 'rating']

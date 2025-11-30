from django.urls import path
from .views import recommend_games

urlpatterns = [
    path('api/recommend/', recommend_games, name='recommend-games'),
]

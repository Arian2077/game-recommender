from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from recommender.views import GameViewSet, recommend_games

router = routers.DefaultRouter()
router.register('games', GameViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('recommend/', recommend_games),
]

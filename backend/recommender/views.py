from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Game
from .serializers import GameSerializer

class GameViewSet(ReadOnlyModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

@api_view(['GET'])
def recommend_games(request):
    # Temporary: top 5 highest-rated games
    games = Game.objects.order_by('-rating')[:5]
    serializer = GameSerializer(games, many=True)
    return Response(serializer.data)

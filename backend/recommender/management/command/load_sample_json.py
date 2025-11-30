import os
import json
from recommender.models import Game, Genre


def load_sample_games():
    # calculate path to JSON relative to this file
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    json_path = os.path.join(BASE_DIR, "data", "sample_games.json")

    if not os.path.exists(json_path):
        print(f"File not found: {json_path}")
        return

    with open(json_path, encoding="utf-8") as f:
        games = json.load(f)

    for g in games:
        # Create the Game object
        game_obj = Game.objects.create(
            title=g["title"],
            platform=g.get("platform", ""),
            release_year=g.get("release_year"),
            description=g.get("description", "")
        )

        # Handle ManyToMany genres
        genre_objs = []
        for gn in g.get("genres", []):
            genre_obj, _ = Genre.objects.get_or_create(name=gn)
            genre_objs.append(genre_obj)

        game_obj.genres.set(genre_objs)
        game_obj.save()

    print(f"{len(games)} sample games loaded successfully!")

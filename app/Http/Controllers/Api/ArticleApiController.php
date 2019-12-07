<?php

namespace App\Http\Controllers\Api;

use App\Article;
use App\Estate;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleApiController extends Controller
{
    public function index()
    {
        return Article::all();
    }

    public function show(Article $article)
    {
        return $article;
    }

    public function store(Request $request)
    {
        $article = Article::create($request->all());

        return response()->json($article, 201);
    }

    public function update(Request $request, Article $article)
    {
        $article->update($request->all());

        return response()->json($article, 200);
    }

    public function delete(Article $article)
    {
        $article->delete();

        return response()->json(null, 204);
    }

    public function getArticlesForUser(Request $request)
    {
        $userId = $request->get('user_id');
        $user = User::find(str_replace('"', '', $userId));
        $articlesArr = $user->articles;

        $articlesColl = collect();

        foreach ($articlesArr as $key => $value) {
            $articles = Article::find($value);
            $articlesColl->push($articles);
        }

        return $articlesColl;
    }

    public function addArticleForUser(Request $request)
    {
        $userId = $request->get('user_id');
        $user = User::find(str_replace('"', '', $userId));

        $articleId = $request->get('article_id');

        if ($user->articles) {
            $article = in_array($articleId, $user->articles);
            if ($article) {
                return 'Статья уже добавлена в закладки.';
            }
            else {
                $user->articles = array_merge($user->articles, [$articleId]);
                $user->save();
                return 'Статья успешно добавлена в закладки.';
            }
        }
        else {
            $user->articles = [$articleId];
            $user->save();
            return 'Статья успешно добавлена в закладки.';
        }
    }
}

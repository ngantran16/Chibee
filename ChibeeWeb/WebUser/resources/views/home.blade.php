

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div >

@foreach ($stories as $s)
<div>
    <div class="container">
        <p>{{$s->name}}</p>
        <p>{{$s->author}}</p>
        <p>{{$s->type}}</p>
        <p>{{$s->video}}</p>
        <p>{{$s->audio}}</p>
    </div>
</div>
@endforeach
</div>
</body>
</html>
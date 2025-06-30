<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Games</title>
	<link rel="stylesheet" type="text/css" href="assets/css/bulma.min.css">
</head>
<body>
	<header>
		<div class="container">
			<nav class="navbar" role="navigation" aria-label="main navigation">
  				<div class="navbar-brand">
    				<a class="navbar-item" href="index.php">Logo</a>
  				</div>

				<div id="navbarBasicExample" class="navbar-menu">
    				<div class="navbar-start">
      					<a class="navbar-item">
        					Главная
      					</a>
    				</div>

    				<div class="navbar-end">
      					<div class="navbar-item">
        					<div class="buttons">
          						<a class="button is-primary">
            						<strong>Вход</strong>
          						</a>
          						<a class="button is-light">Регистрация</a>
        					</div>
      					</div>
    				</div>
  				</div>
			</nav>
		</div>
	</header>
	<main>
		<div class="container">
			<div class="buttons is-justify-content-center p-5">
				<a href="games.php?mode=two_players" class="button is-link is-outlined m-5">Игра на двоих</a>
				<a href="games.php?mode=with_bot" class="button is-link is-outlined">Игра с ботом</a>
			</div>
		</div>
	</main>
	<footer>
		<div class="container">
			<p>Directed by Svetlana</p>
		</div>
	</footer>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Games</title>
	<link rel="stylesheet" type="text/css" href="../assets/css/style.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/bulma.min.css">
</head>
<body>
	<header>
		<div class="container">
			<nav class="navbar" role="navigation" aria-label="main navigation">
  				<div class="navbar-brand">
    				<a class="navbar-item" href="../index.php">Logo</a>
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
			<article class="message is-success">
  				<div class="message-header">
    				<p>Победа!</p>
    				<button class="delete" aria-label="delete"></button>
  				</div>
  				<div class="message-body" id="message-block">
  					На этот раз сильнее оказались: 
  				</div>
			</article>

			<div class="area is-flex is-justify-content-center">
				<div class="area-row">
					<div class="area-field square" id="field-1"></div>
					<div class="area-field square" id="field-4"></div>
					<div class="area-field square" id="field-7"></div>
				</div>
				<div class="area-row">
					<div class="area-field square" id="field-2"></div>
					<div class="area-field square" id="field-5"></div>
					<div class="area-field square" id="field-8"></div>
				</div>
				<div class="area-row">
					<div class="area-field square" id="field-3"></div>
					<div class="area-field square" id="field-6"></div>
					<div class="area-field square" id="field-9"></div>
				</div>
			</div>
		</div>
	</main>
	<footer>
		<div class="container">
			<p>Directed by Svetlana</p>
		</div>
	</footer>
	<script type="text/javascript" src="../assets/js/tic-tac-toe.js"></script>
</body>
</html>
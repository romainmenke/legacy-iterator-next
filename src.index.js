const url = new URL(
	'https://u:p@example.com:8080/some/path?foo=true&bar=true#frag'
);

Array.from(url.searchParams.entries());

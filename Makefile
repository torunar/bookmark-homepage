build: clean
	zip -r bookmark-homepage.zip homepage.css homepage.html homepage.js icons/ _locales/ manifest.json worker.js

clean:
	rm -rf bookmark-homepage.zip

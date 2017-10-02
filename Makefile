help
	echo 'Staring'
	gulp bump
	git commit -am "Bumped version"
	python setup.py sdist upload
	gulp tag
	git push origin master --tags
	echo 'Finished'

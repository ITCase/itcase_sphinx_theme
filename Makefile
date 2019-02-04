help:
	echo 'Staring'
	gulp bump
	git commit -am "Bumped version"
	python setup.py sdist upload
	gulp tag
	git push origin master --tags
	echo 'Finished'

loadrc:
	git archive --remote=git@bitbucket.org:itcase-dev/gulp-tasks.git master .babelrc .eslintignore .eslintrc .htmlhintrc .huskyrc .lintstagedrc .lintstagedrc .prettierignore .prettierrc .stylelintrc | tar -xv

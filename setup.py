import os

from setuptools import setup, find_packages

VERSION = '0.1.2'

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.rst')).read()


setup(name='itcase-sphinx-theme',
      version=VERSION,
      description=('ITCase Sphinx themes for documentation styling.'),
      long_description=README,
      classifiers=[
          "Environment :: Web Environment",
          "Intended Audience :: Developers",
          "Intended Audience :: System Administrators",
          "Programming Language :: Python",
          "License :: Repoze Public License",
          "Topic :: Internet",
          "Topic :: Software Development :: Documentation",
      ],
      keywords='itcase web sphinx documentation',
      author="ITCase",
      author_email="info@itcase.pro",
      url="https://github.com/ITCase/itcase_sphinx_theme",
      license="BSD-derived (http://www.repoze.org/LICENSE.txt)",
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      install_requires=[],
      entry_points=''
      )

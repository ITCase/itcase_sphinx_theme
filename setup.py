import json
import os

from setuptools import find_packages, setup

with open('package.json') as package_info:
    package_info = json.load(package_info)
    VERSION = package_info['version']

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.rst')).read()


setup(
    name='itcase-sphinx-theme',
    version=VERSION,
    url="https://github.com/ITCase/itcase_sphinx_theme",
    license='MIT',
    author="ITCase",
    author_email="info@itcase.pro",
    description=('ITCase Sphinx themes for documentation.'),
    long_description=README,
    zip_safe=False,
    packages=find_packages(),
    include_package_data=True,
    classifiers=[
        'Framework :: Sphinx',
        'Framework :: Sphinx :: Theme',
        'Development Status :: 5 - Production/Stable',
        'License :: OSI Approved :: MIT License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)

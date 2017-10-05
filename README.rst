|PyPi|

ITCase Sphinx Theme
===================

Install
-------

.. code-block:: bash

     $ pip install itcase_sphinx_theme -U

Edit your Sphinx's ``conf.py``
------------------------------

Near the top, add the following
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

     import itcase_sphinx_theme

Activate the theme
~~~~~~~~~~~~~~~~~~

.. code-block:: python

    html_theme = 'itcase'
    html_theme_path = [itcase_sphinx_theme.get_html_themes_path()]

If you want see version of theme in the bottom just add extension:

.. code-block:: python

    extensions = ['itcase_sphinx_theme']

Theme options
~~~~~~~~~~~~~

You can set theme options in ``conf.py`` like.

.. code-block:: python

     html_theme_options = {
         'travis_button': True,
         'github_button': True,
         'github_user': 'ITCase',
         'github_repo': 'pyramid_sacrud',
     }

Here are list of options with default values:
"""""""""""""""""""""""""""""""""""""""""""""

* **logo** — Show logo at the top of navigation menu. ``default: false``
* **logo_image** —  Path to logo. ``default: ""``
* **logo_width** — Width in 'px' or '%'. ``default: ""``
* **logo_height** — Height in 'px' or '%'. ``default: ""``
* **logo_image_desc** — Description after logo image. ``default: ""``
* **index_menu** — Show navigation menu on main page. ``default: false``
* **sticky_menu** — Make navigation element always visible on page. ``default: true``

* **github_button** — Show git star badge under breadcrumbs. ``default: false``
* **github_user** — ``default: ""``
* **github_repo** — ``default: ""``

* **travis_button** — Show travis badge under breadcrumbs. ``default: false``
* **travis_user** — ``default: ""``
* **travis_repo** — ``default: ""``

How use theme
~~~~~~~~~~~~~

* http://sacrud-deform.readthedocs.org/en/master/
* http://sacrud.readthedocs.org/en/master/
* http://ps-tree.readthedocs.org/en/latest/
* http://uralbash.ru/
* your project ...

.. |PyPI| image:: http://img.shields.io/pypi/dm/itcase_sphinx_theme.svg
   :target: https://pypi.python.org/pypi/itcase_sphinx_theme/

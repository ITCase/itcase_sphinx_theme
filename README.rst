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

#. Theme options

 You can set theme options in ``conf.py``. Here are list of options with default values:

* logo ``default: False``
* logo_image ``default: ""``
* logo_width ``default: ""``
* logo_heigh ``default: ""``
* logo_image_desc ``default: ""``


* aindex_menu   ``default: False``

sticky_menu — ``default: True``

Make navigation element always visible on page.


github_button — ``default: False``

Show git star repository button under breadcrumbs.


github_user — ``default: ""``

github_repo — ``default: ""``

* travis_button =  ``default: False``

ScreenShots
-----------

`ustu/lectures.www <https://github.com/ustu/lectures.www>`_
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://cdn.rawgit.com/ITCase/itcase_sphinx_theme/master/example/_static/screen1.png
   :width: 650px

`ITCase/sqlalchemy_mptt <https://github.com/ITCase/sqlalchemy_mptt>`_
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://cdn.rawgit.com/ITCase/itcase_sphinx_theme/master/example/_static/screen2.png
   :width: 650px

`Ergo/ziggurat_foundations <https://github.com/ergo/ziggurat_foundations>`_
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: https://cdn.rawgit.com/ITCase/itcase_sphinx_theme/master/example/_static/screen3.png
   :width: 650px

And other...
~~~~~~~~~~~~

* http://sacrud-deform.readthedocs.org/en/master/ 
* http://sacrud.readthedocs.org/en/master/
* http://pyramid-sacrud.readthedocs.org/en/master/
* http://pyramid-pages.readthedocs.org/en/master/
* http://ps-tree.readthedocs.org/en/latest/
* http://uralbash.ru/
* your project ...

.. |PyPI| image:: http://img.shields.io/pypi/dm/itcase_sphinx_theme.svg
   :target: https://pypi.python.org/pypi/itcase_sphinx_theme/

Что такое reStructuredText?
===========================

**reStructuredText** (сокращение: **ReST**, расширение файла: **.rst**) — облегчённый язык разметки, который может быть преобразован в различные форматы — HTML, ePub, PDF и другие.

Документы с разметкой ReST являются обычными текстовыми файлами. С такими файлами очень легко работать посредством системы управления Git, которая позволяет отслеживать все вносимые изменения, легко принимать или отклонять их.

Помимо этого, документы в формате .rst можно открывать и редактировать в любом простом текстовом редакторе (например, в Блокноте). Это позволяет работать над документацией в любых условиях, на любых платформах, без необходимости использовать специализированное программное обеспечение.

Самое главное, что ReST позволяет сосредоточиться исключительно на структуре документа и не отвлекаться на его оформление.

ReST аналогичен языку разметки Markdown, но обладает более расширенным синтаксисом, особенно вкупе с генератором документации Sphinx.  ReST используется во многих проектах, например, на сайте GitHub. Также его используют многие генераторы статических сайтов такие, как: Hyde, Pelican и другие.


Базовые концепции
=================

Синтаксис reStructuredText опирается на следующие концепции:

* Отступы и пробелы имеют значение для команд разметки [#]_, но не имеют значения внутри текста (10 пробелов будут отображены как один);
* В командах (директивах) используется символ обратной кавычки «`», который располагается на клавише с буквой ``ё`` и символом ``~``. Использование обычных одинарных кавычек в командах не приведет к желаемым результатам.

.. [#] Не важно как делается отступ — пробелами или клавишей Tab, главное, чтобы они были одинакового размера.

Абзацы
======

Абзацы в :abbr:`ReST (reStructuredText)` отделяются друг от друга пустой строкой:
::

    Первый абзац...

    Строки параграфов начинаются от левой границы
    и отделяются параграфы друг от друга пустой строкой.

Заголовки
=========

:abbr:`ReST (reStructuredText)` поддерживает несколько уровней заголовков. Заголовки первого уровня (главы) подчеркиваются символом равно ``=``. Заголовки второго уровня (подглавы) подчеркиваются символом короткого тире или минуса ``-``. Заголовки третьего уровня (подпункта) подчеркиваются символом тильды  ``~``. Для параграфов допускается использовать подчеркивание символами двойных кавычек ``"``

Заголовки подчеркиваются (или отбиваются сверху и снизу) с помощью небуквенных
и нецифровых 7­-битных ASCII символов. Рекомендуется использовать: «``= ­ ` : ' " ~ ^ _ * + # < >``». Отбивка должна быть не короче текста заголовка.

::

    Заголовок 1 уровня
    ==================

    Заголовок 2 уровня
    ------------------

    Заголовок 3 уровня
    ~~~~~~~~~~~~~~~~~~

    Заголовок 4 уровня
    """"""""""""""""""

Результат:

Заголовок 1 уровня
==================
Заголовок 2 уровня
------------------
Заголовок 3 уровня
~~~~~~~~~~~~~~~~~~
Заголовок 4 уровня
""""""""""""""""""


Начертание
==========

Чтобы выделить текст **жирным** начертанием или *курсивным* используется обособление звездочками:
::

    **жирный текст**

    *курсив текст*

Результат:

**жирный текст**

*курсив текст*

.. attention:: Не допускается наличие пробелов между выделяемым словом и звездочкой, например, команда ``** жирный текст**`` не даст нужного эффекта.

Начертание текста ``«как есть»`` достигается обособлением двумя обратными кавычками:
::

    ``«как есть»``


Нумерованные списки
===================

Нумерованные списки создаются с помощью символа решетки с точкой ``#.``:
::

    #. Один
    #. Два
    #. Три

    Или:
    5. Пять
    6. Шесть
    #. Семь

Результат:

#. Один
#. Два
#. Три

Или:

5. Пять
6. Шесть
#. Семь


Маркированные списки
====================
Маркированные списки создаются с помощью символа звездочки ``*`` или дефиса ``-``. Пробелы после маркера обязательны:
::

    * Один
    * Два
    * Три

Результат:

* Один
* Два
* Три


Вложенные списки
================
::

    * Первый уровень
        * Второй уровень
            * Третий уровень
                * Четвертый уровень
                    * Пятый уровень

Результат:

* Первый уровень
    * Второй уровень
        * Третий уровень
            * Четвертый уровень
                * Пятый уровень

::

    #. Один
        * Маркер
    #. Два
        #. Номер

Результат:

#. Один
    * Маркер
#. Два
    #. Номер


Верхний и нижние индексы
========================

Верхние и нижние индексы добавляются с помощью команд  ``:sub:`` и ``:sup:``.
::

    H\ :sub:`2`\ O
    E = mc\ :sup:`2`

Результат:

* H\ :sub:`2`\ O
* E = mc\ :sup:`2`

Другой способ с помощью автозамены:
::

    Химическая формула воды — |H2O|.

    .. |H2O| replace:: H\ :sub:`2`\ O

Химическая формула воды — |H2O|.

.. |H2O| replace:: H\ :sub:`2`\ O


Определения
===========
В :abbr:`ReST (reStructuredText)` можно набрать два типа определений:
::

    :Первый: В прямоугольном треугольнике квадрат длины
             гипотенузы равен сумме квадратов длин катетов.

    Второй
        В прямоугольном треугольнике квадрат длины
        гипотенузы равен сумме квадратов длин катетов.

Результат:

:Первый: В прямоугольном треугольнике квадрат длины гипотенузы равен сумме квадратов длин катетов.

Второй
    В прямоугольном треугольнике квадрат длины гипотенузы равен сумме квадратов длин катетов.


Цитаты
======

Для вставки цитат используется отступ, сделанный с помощью клавиши `Tab`:
::

    Основной текст:

        Цитата неизвестного человека

        --Аноним


Результат:

    Цитата неизвестного человека

    --Аноним

Эпиграф
=======

::

    .. epigraph::

       *«Если бы двери восприятия были чисты, всё
       предстало бы человеку таким, как оно есть — бесконечным»*

       -- Уильям Блэйк

Результат:

.. epigraph::

   *«Если бы двери восприятия были чисты, всё
   предстало бы человеку таким, как оно есть — бесконечным»*

   -- |nbsp| Уильям Блэйк

.. |nbsp| unicode:: U+00A0




Оформление эпиграфа зависит от настроек HTML-темы или используемого шаблона LaTeX.


В американской типографике, в отличие от европейской, не принято отбивать тире пробелами. Чтобы получить пробел между тире и автором я использовал функцию `Автозамены (Подстановки)`_. В моем случае код эпиграфа выглядит так:
::

    .. epigraph::

       *«Если бы двери восприятия были чисты, всё
       предстало бы человеку таким, как оно есть — бесконечным»*

       -- |nbsp| Уильям Блэйк

       .. |nbsp| unicode:: U+00A0

.. _rst-footnotes-label:

Сноски
======

Сноски могут быть разного вида:
::

    Числовая сноска [5]_.

    .. [5] Сюда ведет числовая сноска.

    Сноски с автоматической [#]_ нумерацией [#]_.

    .. [#] Это первая сноска.
    .. [#] Это вторая сноска.

    Авто­символ сносок используйте вот так [*]_ и [*]_.

    .. [*] Это первый символ.
    .. [*] Это второй символ.

Результаты:

Числовая сноска [5]_.

.. [5] Сюда ведет числовая сноска.

Сноски с автоматической [#]_ нумерацией [#]_.

.. [#] Это первая сноска.
.. [#] Это вторая сноска.

Авто­символ сносок используйте вот так [*]_ и [*]_.

.. [*] Это первый символ.
.. [*] Это второй символ.


::

   Ссылки на цитаты выглядят так [CIT2002]_.

   .. [CIT2002] Это цитата
   (как часто используемая в журналах).


Ссылки на цитаты выглядят так [CIT2002]_.

.. [CIT2002] Это цитата
   (как часто используемая в журналах).

При экспорте в PDF сноски автоматически располагаются в конце страницы. Чтобы цитата располагалась в конце HTML-страницы, необходимо команду сноски располагать в конце *.rst* файла [CIT2003]_.


Комментарии
===========
В :abbr:`ReST (reStructuredText)` можно оставлять комментарии, которые отображаются только в исходном файле ReST. Комментарии создаются с помощью двух точек в начале предложения ``..``. Для создания многострочных комментариев необходимо соблюдать отступ:
::

    .. Это комментарий
       Многострочный комментарий

.. Это комментарий
   Много строчный комментарий

.. _listing-rst:

Листинги (исходный код)
=======================
Если обособление обратными кавычками используется для визуального выделения команд в абзацах, то для примеров частей исходного кода используется команда из двух двоеточий ``::``:
::

    Посмотрим на исходный код:
    ::

        Пример исходного кода

.. warning:: Пустая строка между командой ``::`` и примером кода, а также отступ перед ним, обязательны.

Существуют другие способы ввода команды ``::``, например: ::

    Посмотрим на исходный код: ::

        Пример исходного кода

Или так::

    Посмотрим на исходный код::

        Пример исходного кода


В данном случае команда ``::`` будет верно истолкована, а двоеточие в тексте
поставлено автоматически. Это более лаконичная форма записи.

Для вставки блоков исходного кода с подсветкой синтаксиса и нумерацией строк в
Sphinx используются специальные команды, подробнее смотрите раздел
:ref:`source-code-label`.

Python
------

.. code-block:: python
   :linenos:
   :emphasize-lines: 1-3

   from wsgiref.simple_server import make_server
   from pyramid.config import Configurator
   from pyramid.response import Response

   def hello(request):
       return Response('Hello world!')

   if __name__ == '__main__':
       config = Configurator()
       config.add_route('hello_world', '/')
       config.add_view(hello, route_name='hello_world')
       app = config.make_wsgi_app()
       server = make_server('0.0.0.0', 8080, app)
       server.serve_forever()

.. code:: python

    from .models import DBSession, Groups
    from sacrud.action import CRUD

    data = {'name': 'Electronics',
            'parent_id': '10',}
    group_obj = CRUD(DBSession, Groups).create(data)
    print(group_obj.name)

::

    from .models import DBSession, Groups
    from sacrud.action import CRUD

    data = {'name': 'Electronics',
            'parent_id': '10',}
    group_obj = CRUD(DBSession, Groups).create(data)
    print(group_obj.name)

bash
----

.. code-block:: bash

   $ pyvenv myproject
   $ cd myproject
   $ bin/pip install pyramid

.. code-block:: bash

   # open file test.data for reading
   exec 6<test.data
   # read until end of file
   while read -u 6 dta
   do
     echo "$dta"
   done
   # close file test.data
   exec 6<&-

C++
---

``hello.cpp`` file.

.. code-block:: cpp
   :linenos:
   :caption: This is ``hello.cpp`` file

   #include <iostream>
   using namespace std;

   int main ()
   {
      cout << "Hello world!!!\n";
      return 0;
   }

JavaScript
----------

.. code-block:: javascript
   :linenos:
   :caption: nodejs
   :emphasize-lines: 1

   var net = require('net');

   var server = net.createServer(function (stream) {
       stream.setEncoding('utf8');

       stream.addListener('connect', function () {
           stream.write('hello\r\n');
       });

       stream.addListener('data', function (data) {
           stream.write(data);
       });

       stream.addListener('end', function () {
           stream.write('goodbye\r\n');
           stream.end();
       });
   });

   server.listen(1337, 'localhost');

Jinja2
------

.. code-block:: htmldjango
   :linenos:


   <!DOCTYPE html>
   <html lang="en">
   <head>
       {% block head %}
       <link rel="stylesheet" href="style.css" />
       <title>{% block title %}{% endblock %} - My Webpage</title>
       {% endblock %}
   </head>
   <body>
       <div id="content">{% block content %}{% endblock %}</div>
       <div id="footer">
           {% block footer %}
           &copy; Copyright 2008 by <a href="http://domain.invalid/">you</a>.
           {% endblock %}
       </div>
   </body>
   </html>

.. code-block:: jinja

   {% extends "base.html" %}
   {% block title %}Index{% endblock %}
   {% block head %}
       {{ super() }}
       <style type="text/css">
           .important { color: #336699; }
       </style>
   {% endblock %}
   {% block content %}
       <h1>Index</h1>
       <p class="important">
         Welcome to my awesome homepage.
       </p>
   {% endblock %}

Golang
------

.. code-block:: go

   package main

   import "fmt"

   func main() {
       fmt.Println("Hello, 世界")
   }

JSON
----

.. code-block:: json

   {
      "firstName": "Иван",
      "lastName": "Иванов",
      "address": {
          "streetAddress": "Московское ш., 101, кв.101",
          "city": "Ленинград",
          "postalCode": 101101
      },
      "phoneNumbers": [
          "812 123-1234",
          "916 123-4567"
      ]
   }

long string
-----------


.. code-block:: bash

   ('200 OK', [('Content-Type', 'text/plain; charset=UTF-8'), ('Content-Length', '400')], ["HTTP_HOST: 'localhost:80'\nPATH_INFO: '/test'\nQUERY_STRING: ''\nREQUEST_METHOD: 'GET'\nSCRIPT_NAME: ''\nSERVER_NAME: 'localhost'\nSERVER_PORT: '80'\nSERVER_PROTOCOL: 'HTTP/1.0'\nwsgi.errors: <open file '<stderr>', mode 'w' at 0x7fe3aaca41e0>\nwsgi.input: <_io.BytesIO object at 0x7fe3a8af42f0>\nwsgi.multiprocess: False\nwsgi.multithread: False\nwsgi.run_once: False\nwsgi.url_scheme: 'http'\nwsgi.version: (1, 0)"])

   200 OK
   Content-Type: text/plain; charset=UTF-8
   Content-Length: 400

   HTTP_HOST: 'localhost:80'
   PATH_INFO: '/test'
   QUERY_STRING: ''
   REQUEST_METHOD: 'GET'
   SCRIPT_NAME: ''
   SERVER_NAME: 'localhost'
   SERVER_PORT: '80'
   SERVER_PROTOCOL: 'HTTP/1.0'
   wsgi.errors: <open file '<stderr>', mode 'w' at 0x7fe3aaca41e0>
   wsgi.input: <_io.BytesIO object at 0x7fe3a8af42f0>
   wsgi.multiprocess: False
   wsgi.multithread: False
   wsgi.run_once: False
   wsgi.url_scheme: 'http'
   wsgi.version: (1, 0)

.. code-block:: bash
   :linenos:

   ('200 OK', [('Content-Type', 'text/plain; charset=UTF-8'), ('Content-Length', '400')], ["HTTP_HOST: 'localhost:80'\nPATH_INFO: '/test'\nQUERY_STRING: ''\nREQUEST_METHOD: 'GET'\nSCRIPT_NAME: ''\nSERVER_NAME: 'localhost'\nSERVER_PORT: '80'\nSERVER_PROTOCOL: 'HTTP/1.0'\nwsgi.errors: <open file '<stderr>', mode 'w' at 0x7fe3aaca41e0>\nwsgi.input: <_io.BytesIO object at 0x7fe3a8af42f0>\nwsgi.multiprocess: False\nwsgi.multithread: False\nwsgi.run_once: False\nwsgi.url_scheme: 'http'\nwsgi.version: (1, 0)"])

   200 OK
   Content-Type: text/plain; charset=UTF-8
   Content-Length: 400

   HTTP_HOST: 'localhost:80'
   PATH_INFO: '/test'
   QUERY_STRING: ''
   REQUEST_METHOD: 'GET'
   SCRIPT_NAME: ''
   SERVER_NAME: 'localhost'
   SERVER_PORT: '80'
   SERVER_PROTOCOL: 'HTTP/1.0'
   wsgi.errors: <open file '<stderr>', mode 'w' at 0x7fe3aaca41e0>
   wsgi.input: <_io.BytesIO object at 0x7fe3a8af42f0>
   wsgi.multiprocess: False
   wsgi.multithread: False
   wsgi.run_once: False
   wsgi.url_scheme: 'http'
   wsgi.version: (1, 0)

Автозамены (Подстановки)
========================

Язык |ReST| — очень гибкий язык разметки, который поддерживает функцию автозамены (подстановки).

.. |ReST| replace:: *reStructuredText*

::

    Язык |ReST| — очень гибкий язык разметки (подстановки).

    .. |ReST| replace:: *reStructuredText*

Для удобства я в начале каждого файла делаю список автозамен.

Использование символов юникод (unicode)
=======================================
С функцией автозамены связана функция вставки символов unicode:
::

    Copyright |copy| 2015, |LibreRussia (TM)| |---| все права защищены.

    .. |copy| unicode:: 0xA9 .. знак копирайта
    .. |LibreRussia (TM)| unicode:: LibreRussia U+2122 .. символ торговой марки
    .. |---| unicode:: U+02014 .. длинное тире

Получится такой результат:

Copyright |copy| 2015, |LibreRussia (TM)| |---| все права защищены.

.. |copy| unicode:: 0xA9 .. знак копирайта
.. |LibreRussia (TM)| unicode:: LibreRussia U+2122 .. символ торговой марки
.. |---| unicode:: U+02014 .. длинное тире

Дата и время
============
::

    .. |date| date:: %d.%m.%Y
    .. |time| date:: %H:%M

    Текущая дата |date| и время |time|


.. |date| date:: %d.%m.%Y
.. |time| date:: %H:%M


Результат: Текущая дата |date| и время |time| (на момент генерации документа).


Sphinx добавляет дополнительные команды автозамены, которые не требуют объявления. Подробнее о них написано в следующей главе.

Вставка текста из других файлов
===============================
ReST позволяет вставлять текст из других файлов:
::

        .. include:: имя_файла

Черта (Линия)
=============

Иногда возникает необходимость  визуально отделить абзац, для этого можно воспользоваться чертой, достаточно поставить подряд несколько дефисов (не меньше 4-х), также можно воспользоваться нижним подчеркиванием:
::

    --------

    ________


.. warning:: Символы черты должны быть отбиты пустыми строками до и после.

.. warning:: Черта не должна завершать документ. Черта, расположенная в самом конце документа может вызывать ошибки при сборке.

Ссылки
======

Внешние ссылки создаются так:
::

    1. Внешние ссылки выглядят так: ссылка_.

    .. _ссылка: http://librerussia.blogspot.ru/

    2. Если несколько слов, тогда так: `ссылка в несколько слов`_.

    .. _`ссылка в несколько слов`: http://librerussia.blogspot.ru/

    3. `Более компактная запись ссылок <http://librerussia.blogspot.ru/>`_

Результат:

1. Внешние ссылки выглядят так: ссылка_.

.. _ссылка: http://librerussia.blogspot.ru/

2. Если несколько слов, тогда так: `ссылка в несколько слов`_.

.. _`ссылка в несколько слов`: http://librerussia.blogspot.ru/

3. `Более компактная запись ссылок <http://librerussia.blogspot.ru/>`_


Внутренние ссылки делаются так:
::

    Внутренние ссылки делаются так_

    .. _так:


Ссылками также являются и заголовки разделов, например, `Таблицы`_ :
::

    Ссылка на раздел создается так `Таблицы`_ .
    Достаточно в обратных кавычках написать название заголовка.


Sphinx расширяет возможности создания ссылок, в том числе позволяет ссылаться на заголовки в других документах. Подробнее читайте раздел :ref:`cross-ref-label`.

.. _img-label:

Изображения и иллюстрации
=========================

Вставка изображения между слов |кубик-рубика| осуществляться с помощью функции автозамены:
::

    Вставка изображения между слов |кубик-рубика| осуществляться с помощью функции автозамены:

    .. |кубик-рубика| image:: _static/favicon.ico


.. |кубик-рубика| image:: _static/favicon.ico

Вставка изображений между абзацами осуществляется так:

::

    .. figure:: _static/favicon.png
           :scale: 300 %
           :align: center
           :alt: Альтернативный текст

           Подпись изображения

           Легенда изображения.

.. _my-favicon:

.. figure:: _static/favicon.png
           :scale: 300 %
           :align: center
           :alt: Альтернативный текст

           Подпись изображения

           Легенда изображения.

Параметр ``:scale:`` устанавливает масштаб изображений.

Параметр ``:align:`` устанавливает обтекание текстом, может принимать опции ``left``, ``center`` или ``right``.

Ещё один способ:
::

    .. image:: picture.jpeg
       :height: 100px
       :width: 200px
       :scale: 50%
       :alt: alternate text
       :align: right


.. figure:: _static/sphinx.jpg
    :width: 60%
    :align: center
    :alt: Альтернативный текст

    Сфинкс

    (др.-греч. Σφίγξ, Σφιγγός, сфинга, собств. «душительница») — зооморфное мифическое существо


.. _table-label:


.. figure:: _static/sphinx.jpg
    :align: right
    :width: 300px
    :height: 1000px
    :alt: Альтернативный текст

.. figure:: _static/sphinx.jpg
    :align: left
    :width: 100px
    :height: 1000px
    :alt: Альтернативный текст

`ps_tree` is extension for `pyramid_sacrud
<https://github.com/ITCase/pyramid_sacrud/>`_ which displays a list of records
as tree. This works fine with models from `sqlalchemy_mptt
<https://github.com/ITCase/sqlalchemy_mptt/>`_.

Look how easy it is to use:

.. code-block:: python
   :caption: Create model

   from pyramid_pages.models import BaseSacrudMpttPage

   Base = declarative_base()
   DBSession = scoped_session(sessionmaker(extension=ZopeTransactionExtension()))

   class PageTree(Base, BaseSacrudMpttPage):
       __tablename__ = 'pages'

       id = Column(Integer, primary_key=True)

.. code-block:: python
   :caption: Settings for pyramid app

   config.include('ps_tree')
   config.registry.settings['ps_tree.models'] = (PageTree, )
   config.include('pyramid_sacrud', route_prefix='admin')
   config.registry.settings['pyramid_sacrud.models'] = ('', PageTree)

Таблицы
=======

Создавать таблицы можно несколькими способами:
::

    .. table:: Заголовок таблицы (Внимание! Отступ таблицы относительно
               команды ..``table::`` обязателен)

        +------------------------+------------+----------+----------+
        | Header row, column 1   | Header 2   | Header 3 | Header 4 |
        | (header rows optional) |            |          |          |
        +========================+============+==========+==========+
        | body row 1, column 1   | column 2   | column 3 | column 4 |
        +------------------------+------------+----------+----------+
        | body row 2             | Cells may span columns.          |
        +------------------------+------------+---------------------+
        | body row 3             | Cells may  | - Table cells       |
        +------------------------+ span rows. | - contain           |
        | body row 4             |            | - body elements.    |
        +------------------------+------------+---------------------+

.. important:: Отступ таблицы относительно команды ``.. table::`` обязателен

Результат:

.. table:: Заголовок таблицы (Внимание! Отступ таблицы относительно команды  ``.. table::`` обязателен)

    +------------------------+------------+----------+----------+
    | Header row, column 1   | Header 2   | Header 3 | Header 4 |
    | (header rows optional) |            |          |          |
    +========================+============+==========+==========+
    | body row 1, column 1   | column 2   | column 3 | column 4 |
    +------------------------+------------+----------+----------+
    | body row 2             | Cells may span columns.          |
    +------------------------+------------+---------------------+
    | body row 3             | Cells may  | - Table cells       |
    +------------------------+ span rows. | - contain           |
    | body row 4             |            | - body elements.    |
    +------------------------+------------+---------------------+

Простая таблица:
::

    .. table:: Простая таблица
        =====  =====  =======
          A      B    A and B
        =====  =====  =======
        False  False  False
        True   False  False
        False  True   False
        True   True   True
        =====  =====  =======


Результат:

.. table:: Простая таблица

    =====  =====  =======
      A      B    A and B
    =====  =====  =======
    False  False  False
    True   False  False
    False  True   False
    True   True   True
    =====  =====  =======


Ещё один пример:
::

    .. table:: Простая таблица со сложной шапкой

        =====  =====  ======
           Inputs     Output
        ------------  ------
          A      B    A or B
        =====  =====  ======
        False  False  False
        True   False  True
        False  True   True
        True   True   True
        =====  =====  ======

Результат:

.. table:: Простая таблица со сложной шапкой

    =====  =====  ======
       Inputs     Output
    ------------  ------
      A      B    A or B
    =====  =====  ======
    False  False  False
    True   False  True
    False  True   True
    True   True   True
    =====  =====  ======

Ещё один тип таблицы — CSV-таблица:

::

    .. csv-table:: CSV-таблица
       :header: "Treat", "Quantity", "Description"
       :widths: 15, 10, 30

       "Albatross", 2.99, "On a stick!"
       "Crunchy Frog", 1.49, "If we took the bones out, it wouldn't be
       crunchy, now would it?"
       "Gannet Ripple", 1.99, "On a stick!"

Результат:

.. _cvs-table:

.. csv-table:: CSV-таблица
   :header: "Treat", "Quantity", "Description"
   :widths: 15, 10, 30

   "Albatross", 2.99, "On a stick!"
   "Crunchy Frog", 1.49, "If we took the bones out, it wouldn't be
   crunchy, now would it?"
   "Gannet Ripple", 1.99, "On a stick!"


.. note:: Смотрите также статью `reStructuredText (ReST): Быстрый способ ввода таблиц  <http://librerussia.blogspot.ru/2015/02/restructuredtext-csv-table.html>`_

Ещё один тип таблицы — таблица в виде списка:
::

    .. list-table:: Таблица в виде списка
       :widths: 15 10 30
       :header-rows: 1

       * - Treat
         - Quantity
         - Description
       * - Albatross
         - 2.99
         - On a stick!
       * - Crunchy Frog
         - 1.49
         - If we took the bones out, it wouldn't be
           crunchy, now would it?
       * - Gannet Ripple
         - 1.99
         - On a stick!

.. list-table:: Таблица в виде списка
   :widths: 15 10 30
   :header-rows: 1

   * - Treat
     - Quantity
     - Description
   * - Albatross
     - 2.99
     - On a stick!
   * - Crunchy Frog
     - 1.49
     - If we took the bones out, it wouldn't be
       crunchy, now would it?
   * - Gannet Ripple
     - 1.99
     - On a stick!


Формулы
=======

Вставка формул осуществляется командой ``.. math::``. Для ввода формул используется синтаксис LaTeX:

::

    .. math::

       \alpha_t(i) = P(O_1, O_2, … O_t, q_t = S_i \lambda)

Результат:

.. math::

    \alpha_t(i) = P(O_1, O_2, … O_t, q_t = S_i \lambda)


Sphinx расширяет возможности отображения формул, добавляя возможность ссылаться на них. Подробнее в разделе :ref:`math-insert-label`. Также смотрите раздел :ref:`math-errors2-label`.

.. note:: `Таблица математических символов <https://ru.wikipedia.org/wiki/Таблица_математических_символов>`_


.. _admonitions-label:

Блоки примечаний и предупреждений
=================================

Блоки примечаний и предупреждений используются для сообщения дополнительной информации. Локализация заголовков и оформление блоков зависит от используемого шаблона. В стандартном шаблоне, используемом на сайте ReadTheDocs.org все блоки имеют собственное оформление, а локализация заголовков зависит от выбранного языка. Также язык настраивается в файле конфигурации Sphinx ``conf.py``.

.. attention:: Блок **Внимание**, команда: ``.. attention::``

.. caution:: Блок **Осторожно**, команда: ``.. caution::``

.. danger:: Блок **Опасно**, команда: ``.. danger::``

.. error:: Блок **Ошибка**, команда: ``.. error::``

.. hint:: Блок **Подсказка**, команда: ``.. hint::``

.. important:: Блок **Важно**, команда: ``.. important::``

.. note:: Блок **Примечание**, команда: ``.. note::``

.. note:: Исходный код доступен по адресу:

   * foo
   * bar

.. tip:: Блок **Совет**, команда: ``.. tip::``

.. warning:: Блок **Предупреждение**, команда: ``.. warning::``

.. todo:: Блок **План**, команда: ``.. todo::``

.. seealso:: Блок **См.также**, команда: ``.. seealso::``

Код блоков выглядит так:
::

    .. tip:: Блок **Совет**, команда: ``.. tip::``


Содержание
==========

На основе заголовков ReST автоматически создает оглавление, которое вставляется командой ``.. contents::``:
::

    .. contents:: Оглавление
       :depth: 5

    или

    .. contents:: Содержание
       :depth: 5

Параметр ``:depth:`` задает уровни заголовков, которые будут включены в оглавление.

Результат:

.. contents:: Оглавление
   :depth: 5

или

.. contents:: Содержание
   :depth: 5


.. _meta-label:

Метаданные. Тег META
====================

Имеется возможность добавлять метаданные каждой из страниц непосредственно в rst файлы  с помощью директивы ``.. meta::``:
::

    .. meta::
       :description: The reStructuredText plaintext markup language
       :keywords: plaintext, markup language

Будет преобразовано в:
::

    <meta name="description"
    content="The reStructuredText plaintext markup language">
    <meta name="keywords" content="plaintext, markup language">


Другие атрибуты:
::

    .. meta::
       :description lang=en: An amusing story
       :description lang=fr: Une histoire amusante

::

    .. meta::
       :http-equiv=Content-Type: text/html; charset=ISO-8859-1

Подробнее смотрите раздел `HTML-Specific <http://docutils.sourceforge.net/docs/ref/rst/directives.html#meta>`_ официальной документации reStructuredText.

-----

.. [CIT2003] Код вставки этой цитаты ``.. [CIT2003]`` размещен в самом конце *.rst* файла.

API
===

Domain API
----------

.. module:: sphinx.domains

.. autoclass:: Domain
   :members:

.. autoclass:: ObjType

.. autoclass:: Index
   :members:

Build environment API
---------------------

.. module:: sphinx.environment

.. class:: BuildEnvironment

   **Attributes**

   .. attribute:: app

      Reference to the :class:`.Sphinx` (application) object.

   .. attribute:: config

      Reference to the :class:`.Config` object.

   .. attribute:: srcdir

      Source directory (the directory containing ``conf.py``).

   .. attribute:: doctreedir

      Directory for storing pickled doctrees.

   .. attribute:: found_docs

      A set of all existing docnames.

   .. attribute:: metadata

      Dictionary mapping docnames to "metadata" (see :ref:`metadata`).

   .. attribute:: titles

      Dictionary mapping docnames to the docutils node for their main title.

   .. autoattribute:: docname

   **Utility methods**

   .. automethod:: warn

   .. automethod:: warn_node

   .. automethod:: doc2path

   .. automethod:: relfn2path

   .. automethod:: note_dependency

   .. automethod:: new_serialno

   .. automethod:: note_reread

Docutils markup API
-------------------

Directives are handled by classes derived from
``docutils.parsers.rst.Directive``.  They have to be registered by an extension
using :meth:`.Sphinx.add_directive` or :meth:`.Sphinx.add_directive_to_domain`.

.. module:: docutils.parsers.rst

.. class:: Directive

   The markup syntax of the new directive is determined by the follow five class
   attributes:

   .. autoattribute:: required_arguments
   .. autoattribute:: optional_arguments
   .. autoattribute:: final_argument_whitespace
   .. autoattribute:: option_spec

      Option validator functions take a single parameter, the option argument
      (or ``None`` if not given), and should validate it or convert it to the
      proper form.  They raise :exc:`ValueError` or :exc:`TypeError` to indicate
      failure.

      There are several predefined and possibly useful validators in the
      :mod:`docutils.parsers.rst.directives` module.

   .. autoattribute:: has_content

   New directives must implement the :meth:`run` method:

   .. method:: run()

      This method must process the directive arguments, options and content, and
      return a list of Docutils/Sphinx nodes that will be inserted into the
      document tree at the point where the directive was encountered.

   Instance attributes that are always set on the directive are:

   .. attribute:: name

      The directive name (useful when registering the same directive class under
      multiple names).

   .. attribute:: arguments

      The arguments given to the directive, as a list.

   .. attribute:: options

      The options given to the directive, as a dictionary mapping option names
      to validated/converted values.

   .. attribute:: content

      The directive content, if given, as a :class:`.ViewList`.

   .. attribute:: lineno

      The absolute line number on which the directive appeared.  This is not
      always a useful value; use :attr:`srcline` instead.

   .. attribute:: src

      The source file of the directive.

   .. attribute:: srcline

      The line number in the source file on which the directive appeared.

   .. attribute:: content_offset

      Internal offset of the directive content.  Used when calling
      ``nested_parse`` (see below).

   .. attribute:: block_text

      The string containing the entire directive.

   .. attribute:: state
                  state_machine

      The state and state machine which controls the parsing.  Used for
      ``nested_parse``.

Application API
===============

.. module:: sphinx.application
   :synopsis: Application class and extensibility interface.


Each Sphinx extension is a Python module with at least a :func:`setup` function.
This function is called at initialization time with one argument, the
application object representing the Sphinx process.

.. class:: Sphinx

   This application object has the public API described in the following.

Extension setup
---------------

These methods are usually called in an extension's ``setup()`` function.

Examples of using the Sphinx extension API can be seen in the :mod:`sphinx.ext`
package.

.. method:: Sphinx.setup_extension(name)

   Load the extension given by the module *name*.  Use this if your extension
   needs the features provided by another extension.

.. method:: Sphinx.add_builder(builder)

   Register a new builder.  *builder* must be a class that inherits from
   :class:`~sphinx.builders.Builder`.

.. method:: Sphinx.add_config_value(name, default, rebuild)

   Register a configuration value.  This is necessary for Sphinx to recognize
   new values and set default values accordingly.  The *name* should be prefixed
   with the extension name, to avoid clashes.  The *default* value can be any
   Python object.  The string value *rebuild* must be one of those values:

   * ``'env'`` if a change in the setting only takes effect when a document is
     parsed -- this means that the whole environment must be rebuilt.
   * ``'html'`` if a change in the setting needs a full rebuild of HTML
     documents.
   * ``''`` if a change in the setting will not need any special rebuild.

   .. versionchanged:: 0.4
      If the *default* value is a callable, it will be called with the config
      object as its argument in order to get the default value.  This can be
      used to implement config values whose default depends on other values.

   .. versionchanged:: 0.6
      Changed *rebuild* from a simple boolean (equivalent to ``''`` or
      ``'env'``) to a string.  However, booleans are still accepted and
      converted internally.

.. method:: Sphinx.add_domain(domain)

   Make the given *domain* (which must be a class; more precisely, a subclass of
   :class:`~sphinx.domains.Domain`) known to Sphinx.

   .. versionadded:: 1.0

.. method:: Sphinx.override_domain(domain)

   Make the given *domain* class known to Sphinx, assuming that there is already
   a domain with its ``.name``.  The new domain must be a subclass of the
   existing one.

   .. versionadded:: 1.0

.. method:: Sphinx.add_index_to_domain(domain, index)

   Add a custom *index* class to the domain named *domain*.  *index* must be a
   subclass of :class:`~sphinx.domains.Index`.

   .. versionadded:: 1.0

.. method:: Sphinx.add_event(name)

   Register an event called *name*.  This is needed to be able to emit it.

.. method:: Sphinx.set_translator(name, translator_class)

   Register or override a Docutils translator class. This is used to register
   a custom output translator or to replace a builtin translator.
   This allows extensions to use custom translator and define custom
   nodes for the translator (see :meth:`add_node`).

   This is a API version of :confval:`html_translator_class` for all other
   builders. Note that if :confval:`html_translator_class` is specified and
   this API is called for html related builders, API overriding takes
   precedence.

   .. versionadded:: 1.3

.. method:: Sphinx.add_node(node, **kwds)

   Register a Docutils node class.  This is necessary for Docutils internals.
   It may also be used in the future to validate nodes in the parsed documents.

   Node visitor functions for the Sphinx HTML, LaTeX, text and manpage writers
   can be given as keyword arguments: the keyword should be one or more of
   ``'html'``, ``'latex'``, ``'text'``, ``'man'``, ``'texinfo'`` or any other
   supported translators, the value a 2-tuple of ``(visit, depart)`` methods.
   ``depart`` can be ``None`` if the ``visit`` function raises
   :exc:`docutils.nodes.SkipNode`.  Example:

   .. code-block:: python

      class math(docutils.nodes.Element): pass

      def visit_math_html(self, node):
          self.body.append(self.starttag(node, 'math'))
      def depart_math_html(self, node):
          self.body.append('</math>')

      app.add_node(math, html=(visit_math_html, depart_math_html))

   Obviously, translators for which you don't specify visitor methods will choke
   on the node when encountered in a document to translate.

   .. versionchanged:: 0.5
      Added the support for keyword arguments giving visit functions.

.. method:: Sphinx.add_directive(name, func, content, arguments, **options)
            Sphinx.add_directive(name, directiveclass)

   Register a Docutils directive.  *name* must be the prospective directive
   name.  There are two possible ways to write a directive:

   * In the docutils 0.4 style, *obj* is the directive function.  *content*,
     *arguments* and *options* are set as attributes on the function and
     determine whether the directive has content, arguments and options,
     respectively.  **This style is deprecated.**

   * In the docutils 0.5 style, *directiveclass* is the directive class.  It
     must already have attributes named *has_content*, *required_arguments*,
     *optional_arguments*, *final_argument_whitespace* and *option_spec* that
     correspond to the options for the function way.  See `the Docutils docs
     <http://docutils.sourceforge.net/docs/howto/rst-directives.html>`_ for
     details.

     The directive class must inherit from the class
     ``docutils.parsers.rst.Directive``.

   For example, the (already existing) :rst:dir:`literalinclude` directive would
   be added like this:

   .. code-block:: python

      from docutils.parsers.rst import directives
      add_directive('literalinclude', literalinclude_directive,
                    content = 0, arguments = (1, 0, 0),
                    linenos = directives.flag,
                    language = direcitves.unchanged,
                    encoding = directives.encoding)

   .. versionchanged:: 0.6
      Docutils 0.5-style directive classes are now supported.

.. method:: Sphinx.add_directive_to_domain(domain, name, func, content, arguments, **options)
            Sphinx.add_directive_to_domain(domain, name, directiveclass)

   Like :meth:`add_directive`, but the directive is added to the domain named
   *domain*.

   .. versionadded:: 1.0

.. method:: Sphinx.add_role(name, role)

   Register a Docutils role.  *name* must be the role name that occurs in the
   source, *role* the role function (see the `Docutils documentation
   <http://docutils.sourceforge.net/docs/howto/rst-roles.html>`_ on details).

.. method:: Sphinx.add_role_to_domain(domain, name, role)

   Like :meth:`add_role`, but the role is added to the domain named *domain*.

   .. versionadded:: 1.0

.. method:: Sphinx.add_generic_role(name, nodeclass)

   Register a Docutils role that does nothing but wrap its contents in the
   node given by *nodeclass*.

   .. versionadded:: 0.6

.. method:: Sphinx.add_object_type(directivename, rolename, indextemplate='', parse_node=None, \
                                   ref_nodeclass=None, objname='', doc_field_types=[])

   This method is a very convenient way to add a new :term:`object` type that
   can be cross-referenced.  It will do this:

   * Create a new directive (called *directivename*) for documenting an object.
     It will automatically add index entries if *indextemplate* is nonempty; if
     given, it must contain exactly one instance of ``%s``.  See the example
     below for how the template will be interpreted.
   * Create a new role (called *rolename*) to cross-reference to these
     object descriptions.
   * If you provide *parse_node*, it must be a function that takes a string and
     a docutils node, and it must populate the node with children parsed from
     the string.  It must then return the name of the item to be used in
     cross-referencing and index entries.  See the :file:`conf.py` file in the
     source for this documentation for an example.
   * The *objname* (if not given, will default to *directivename*) names the
     type of object.  It is used when listing objects, e.g. in search results.

   For example, if you have this call in a custom Sphinx extension::

      app.add_object_type('directive', 'dir', 'pair: %s; directive')

   you can use this markup in your documents::

      .. rst:directive:: function

         Document a function.

      <...>

      See also the :rst:dir:`function` directive.

   For the directive, an index entry will be generated as if you had prepended ::

      .. index:: pair: function; directive

   The reference node will be of class ``literal`` (so it will be rendered in a
   proportional font, as appropriate for code) unless you give the
   *ref_nodeclass* argument, which must be a docutils node class.  Most useful
   are ``docutils.nodes.emphasis`` or ``docutils.nodes.strong`` -- you can also
   use ``docutils.nodes.generated`` if you want no further text decoration.  If
   the text should be treated as literal (e.g. no smart quote replacement), but
   not have typewriter styling, use ``sphinx.addnodes.literal_emphasis`` or
   ``sphinx.addnodes.literal_strong``.

   For the role content, you have the same syntactical possibilities as for
   standard Sphinx roles (see :ref:`xref-syntax`).

   This method is also available under the deprecated alias
   ``add_description_unit``.

.. method:: Sphinx.add_crossref_type(directivename, rolename, indextemplate='', ref_nodeclass=None, objname='')

   This method is very similar to :meth:`add_object_type` except that the
   directive it generates must be empty, and will produce no output.

   That means that you can add semantic targets to your sources, and refer to
   them using custom roles instead of generic ones (like :rst:role:`ref`).
   Example call::

      app.add_crossref_type('topic', 'topic', 'single: %s', docutils.nodes.emphasis)

   Example usage::

      .. topic:: application API

      The application API
      -------------------

      <...>

      See also :topic:`this section <application API>`.

   (Of course, the element following the ``topic`` directive needn't be a
   section.)

.. method:: Sphinx.add_transform(transform)

   Add the standard docutils :class:`Transform` subclass *transform* to the list
   of transforms that are applied after Sphinx parses a reST document.

.. method:: Sphinx.add_javascript(filename)

   Add *filename* to the list of JavaScript files that the default HTML template
   will include.  The filename must be relative to the HTML static path, see
   :confval:`the docs for the config value <html_static_path>`.  A full URI with
   scheme, like ``http://example.org/foo.js``, is also supported.

   .. versionadded:: 0.5

.. method:: Sphinx.add_stylesheet(filename)

   Add *filename* to the list of CSS files that the default HTML template will
   include.  Like for :meth:`add_javascript`, the filename must be relative to
   the HTML static path, or a full URI with scheme.

   .. versionadded:: 1.0

.. method:: Sphinx.add_latex_package(packagename, options=None)

   Add *packagename* to the list of packages that LaTeX source code will include.
   If you provide *options*, it will be taken to `\usepackage` declaration.

   .. code-block:: python

      app.add_latex_package('mypackage')             # => \usepackage{mypackage}
      app.add_latex_package('mypackage', 'foo,bar')  # => \usepackage[foo,bar]{mypackage}

   .. versionadded:: 1.3

.. method:: Sphinx.add_lexer(alias, lexer)

   Use *lexer*, which must be an instance of a Pygments lexer class, to
   highlight code blocks with the given language *alias*.

   .. versionadded:: 0.6

.. method:: Sphinx.add_autodocumenter(cls)

   Add *cls* as a new documenter class for the :mod:`sphinx.ext.autodoc`
   extension.  It must be a subclass of :class:`sphinx.ext.autodoc.Documenter`.
   This allows to auto-document new types of objects.  See the source of the
   autodoc module for examples on how to subclass :class:`Documenter`.

   .. XXX add real docs for Documenter and subclassing

   .. versionadded:: 0.6

.. method:: Sphinx.add_autodoc_attrgetter(type, getter)

   Add *getter*, which must be a function with an interface compatible to the
   :func:`getattr` builtin, as the autodoc attribute getter for objects that are
   instances of *type*.  All cases where autodoc needs to get an attribute of a
   type are then handled by this function instead of :func:`getattr`.

   .. versionadded:: 0.6

.. method:: Sphinx.add_search_language(cls)

   Add *cls*, which must be a subclass of :class:`sphinx.search.SearchLanguage`,
   as a support language for building the HTML full-text search index.  The
   class must have a *lang* attribute that indicates the language it should be
   used for.  See :confval:`html_search_language`.

   .. versionadded:: 1.1

.. method:: Sphinx.require_sphinx(version)

   Compare *version* (which must be a ``major.minor`` version string,
   e.g. ``'1.1'``) with the version of the running Sphinx, and abort the build
   when it is too old.

   .. versionadded:: 1.0

.. method:: Sphinx.connect(event, callback)

   Register *callback* to be called when *event* is emitted.  For details on
   available core events and the arguments of callback functions, please see
   :ref:`events`.

   The method returns a "listener ID" that can be used as an argument to
   :meth:`disconnect`.

.. method:: Sphinx.disconnect(listener_id)

   Unregister callback *listener_id*.


.. exception:: ExtensionError

   All these methods raise this exception if something went wrong with the
   extension API.


Emitting events
---------------

.. method:: Sphinx.emit(event, *arguments)

   Emit *event* and pass *arguments* to the callback functions.  Return the
   return values of all callbacks as a list.  Do not emit core Sphinx events
   in extensions!

.. method:: Sphinx.emit_firstresult(event, *arguments)

   Emit *event* and pass *arguments* to the callback functions.  Return the
   result of the first callback that doesn't return ``None``.

   .. versionadded:: 0.5


Producing messages / logging
----------------------------

The application object also provides support for emitting leveled messages.

.. note::

   There is no "error" call: in Sphinx, errors are defined as things that stop
   the build; just raise an exception (:exc:`sphinx.errors.SphinxError` or a
   custom subclass) to do that.

.. automethod:: Sphinx.warn

.. automethod:: Sphinx.info

.. automethod:: Sphinx.verbose

.. automethod:: Sphinx.debug

.. automethod:: Sphinx.debug2


.. _events:

Sphinx core events
------------------

These events are known to the core.  The arguments shown are given to the
registered event handlers.  Use :meth:`.connect` in an extension's ``setup``
function (note that ``conf.py`` can also have a ``setup`` function) to connect
handlers to the events.  Example:

.. code-block:: python

   def source_read_handler(app, docname, source):
       print('do something here...')

   def setup(app):
       app.connect('source-read', source_read_handler)

Checking the Sphinx version
---------------------------

.. currentmodule:: sphinx

Use this to adapt your extension to API changes in Sphinx.

.. data:: version_info

   A tuple of five elements; for Sphinx version 1.2.1 beta 3 this would be
   ``(1, 2, 1, 'beta', 3)``.

   .. versionadded:: 1.2
      Before version 1.2, check the string ``sphinx.__version__``.


The Config object
-----------------

.. module:: sphinx.config

.. class:: Config

   The config object makes the values of all config values available as
   attributes.

   It is available as the ``config`` attribute on the application and
   environment objects.  For example, to get the value of :confval:`language`,
   use either ``app.config.language`` or ``env.config.language``.


.. _template-bridge:

The template bridge
-------------------

.. currentmodule:: sphinx.application

.. autoclass:: TemplateBridge
   :members:


.. _exceptions:

Exceptions
----------

.. module:: sphinx.errors

.. exception:: SphinxError

   This is the base class for "nice" exceptions.  When such an exception is
   raised, Sphinx will abort the build and present the exception category and
   message to the user.

   Extensions are encouraged to derive from this exception for their custom
   errors.

   Exceptions *not* derived from :exc:`SphinxError` are treated as unexpected
   and shown to the user with a part of the traceback (and the full traceback
   saved in a temporary file).

   .. attribute:: category

      Description of the exception "category", used in converting the exception
      to a string ("category: message").  Should be set accordingly in
      subclasses.

.. exception:: ConfigError

   Used for erroneous values or nonsensical combinations of configuration
   values.

.. exception:: ExtensionError

   Used for errors in setting up extensions.

.. exception:: ThemeError

   Used for errors to do with themes.

.. exception:: VersionRequirementError

   Raised when the docs require a higher Sphinx version than the current one.


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


.. _img-label:

Изображения и иллюстрации
=========================

Вставка изображения между слов |кубик-рубика| осуществляться с помощью функции автозамены:
::

    Вставка изображения между слов |кубик-рубика| осуществляться с помощью функции автозамены:

    .. |кубик-рубика| image:: _static/favicon.ico


.. |кубик-рубика| image:: _static/favicon.ico

Вставка изображений между абзацами:

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
    :align: left
    :width: 400px
    :alt: Альтернативный текст

    Сфинкс слева

.. figure:: _static/sphinx.jpg
    :align: right
    :width: 200px
    :alt: Альтернативный текст

    Сфинкс справа


.. image:: _static/planet_express.svg
    :align: left
    :width: 400px
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

.. versionadded:: 0.100.500

   bla bla bla

.. versionchanged:: 0.100.500

   bla bla bla

.. deprecated:: 0.100.500

   bla bla bla

.. rubric:: This directive creates a paragraph heading that is not used to create a table of contents node.

.. hlist::
   :columns: 3

   * A list of
   * short items
   * that should be
   * displayed
   * horizontally

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


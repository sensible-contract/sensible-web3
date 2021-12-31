
===============
Getting Started
===============


.. _adding-web3:

Adding sensible-web3
==============

.. index:: npm
.. index:: yarn

First you need to get sensible-web3 into your project. This can be done using the following methods:

- npm: ``npm install @sensible-contract/sensible-web3``
- yarn: ``yarn add @sensible-contract/sensible-web3``
- pure js: link the ``dist/sensible-web3.min.js``



.. code-block:: javascript

    // In Node.js use: const Web3 = require('web3');

    const web3 = new Web3(window.sensilet);

That's it! now you can use the ``web3`` object.

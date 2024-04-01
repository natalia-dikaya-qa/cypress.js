
describe('Автотесты на авторизацию', function () {

	it('Корректный логин и корректный пароль', function () {
			cy.visit('https://login.qa.studio/'); // заходим на сайт

			cy.get('#mail').type('german@dolnikov.ru'); // вводим логин в инпут логина
			cy.get('#loginButton').should('be.disabled'); // проверяем кнопку Вход на некликабельность

			cy.get('#pass').type('iLoveqastudio1'); // вводим пароль в инпут пароля
			cy.get('#loginButton').should('be.enabled'); // проверяем кнопку Вход на кликабельность

			cy.get('#loginButton').click(); // нажимаем кнопку Вход

			cy.get('#messageHeader').should('be.visible'); // текст сообщения виден пользователю
			cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст сообщения корректный

			cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
			cy.get('#exitMessageButton').should('be.enabled') // крестик кликабелен
		})

	it('Проверка восстановления пароля', function () {
			cy.visit('https://login.qa.studio/'); // заходим на сайт

			cy.get('#forgotEmailButton').click(); // нажимаем Восстановить пароль
			cy.get('#mailForgot').type('german@dolnikov.ru'); // вводим логин
			cy.get('#restoreEmailButton').click(); // нажимаем Отправить код

			cy.get('#messageHeader').should('be.visible'); // текст сообщения виден пользователю
			cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текст сообщения корректный
			
			cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
			cy.get('#exitMessageButton').should('be.enabled') // крестик кликабелен
		})

	it('Корректный логин и НЕкорректный пароль', function () {
			cy.visit('https://login.qa.studio/'); // заходим на сайт

			cy.get('#mail').type('german@dolnikov.ru'); // вводим логин в инпут логина
			cy.get('#loginButton').should('be.disabled'); // проверяем кнопку Вход на некликабельность

			cy.get('#pass').type('iLoveqastudio2'); // вводим неверный пароль в инпут пароля
			cy.get('#loginButton').should('be.enabled'); // проверяем кнопку Вход на кликабельность

			cy.get('#loginButton').click(); // нажимаем кнопку Вход

			cy.get('#messageHeader').should('be.visible'); // текст ошибки виден пользователю
			cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст ошибки корректный

			cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
			cy.get('#exitMessageButton').should('be.enabled') // крестик кликабелен
		})

	it('НЕкорректный логин и корректный пароль', function () {
			cy.visit('https://login.qa.studio/'); // заходим на сайт

			cy.get('#mail').type('german2@dolnikov.ru'); // вводим неверный логин в инпут логина
			cy.get('#loginButton').should('be.disabled'); // проверяем кнопку Вход на некликабельность

			cy.get('#pass').type('iLoveqastudio1'); // вводим пароль в инпут пароля
			cy.get('#loginButton').should('be.enabled'); // проверяем кнопку Вход на кликабельность

			cy.get('#loginButton').click(); // нажимаем кнопку Вход

			cy.get('#messageHeader').should('be.visible'); // текст ошибки виден пользователю
			cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст ошибки корректный

			cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
			cy.get('#exitMessageButton').should('be.enabled') // крестик кликабелен
		})

	it('Валидация инпута логина - ошибка при отсутствии собачки', function () {
			cy.visit('https://login.qa.studio/'); // заходим на сайт

			cy.get('#mail').type('germandolnikov.ru'); // вводим логин без собачки в инпут логина
			cy.get('#loginButton').should('be.disabled'); // проверяем кнопку Вход на некликабельность

			cy.get('#pass').type('iLoveqastudio1'); // вводим пароль в инпут пароля
			cy.get('#loginButton').should('be.enabled'); // проверяем кнопку Вход на кликабельность

			cy.get('#loginButton').click(); // нажимаем кнопку Вход

			cy.get('#messageHeader').should('be.visible'); // текст ошибки виден пользователю
			cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст ошибки корректный

			cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
			cy.get('#exitMessageButton').should('be.enabled') // крестик кликабелен
		})

	it('Валидация инпута логина - допустим любой регистр', function () {
			cy.visit('https://login.qa.studio/'); // заходим на сайт

			cy.get('#mail').type('GerMan@Dolnikov.ru'); // вводим логин в инпут логина
			cy.get('#loginButton').should('be.disabled'); // проверяем кнопку Вход на некликабельность

			cy.get('#pass').type('iLoveqastudio1'); // вводим пароль в инпут пароля
			cy.get('#loginButton').should('be.enabled'); // проверяем кнопку Вход на кликабельность

			cy.get('#loginButton').click(); // нажимаем кнопку Вход

			cy.get('#messageHeader').should('be.visible'); // текст сообщения виден пользователю
			cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст сообщения корректный

			cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
			cy.get('#exitMessageButton').should('be.enabled') // крестик кликабелен
		})
})
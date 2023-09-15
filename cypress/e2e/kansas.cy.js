describe('Автотесты на форму логина', () => {
  it('Верный логин и пароль', () => {
    cy.visit('https://login.qa.studio/');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#mail').type('german@dolnikov.ru');
     cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешно').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });

  it('Верный логин и не верынй пароль', () => {
    cy.visit('https://login.qa.studio/');
     cy.get('#loginButton').should('be.disabled');
    cy.get('#mail').type('german@dolnikov.ru');
     cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('fignya');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });

  it('Не верный логин верный пароль', () => {
    cy.visit('https://login.qa.studio/');
     cy.get('#loginButton').should('be.disabled');
    cy.get('#mail').type('fignya');
     cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });

  it('Логин без собачки', () => {
    cy.visit('https://login.qa.studio/');
     cy.get('#loginButton').should('be.disabled');
    cy.get('#mail').type('germandolnikov.ru');
     cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });

  it('Восстановление пароля', () => {
    cy.visit('https://login.qa.studio/');
     cy.get('#loginButton').should('be.disabled');
     cy.get('#forgotEmailButton').click();
     cy.get('#mailForgot').type('german@dolnikov.ru');
     cy.get('#restoreEmailButton').click();
     cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
     cy.get('#exitMessageButton > .exitIcon').should('be.visible');

  })

  it('Логин с большими и маленькими буквами', () => {
    cy.visit('https://login.qa.studio/');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#mail').type('gerMan@doLniKov.ru');
     cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });
})

describe('Покемоны', () => {
  it('Покупка нового аватара', () => {
    cy.visit('https://pokemonbattle.me/');
    cy.get(':nth-child(1) > .auth__input').type('sanu1up@yandex.ru');
    cy.get('#password').type('16031994Qq');
    cy.get('.auth__button').click();
    cy.url().should('eq', 'https://pokemonbattle.me/');
    cy.get('.header__btns > [href="/shop"]').click(); 

    // Выбор случайной карточки
    const randomCardNumber = getRandomNumber(1, 12);
    cy.get(`:nth-child(${randomCardNumber}) > .shop__button`).click();

    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2')
      .type('2200000000000012');
    cy.get(':nth-child(1) > .pay_base-input-v2').click();
    cy.get(':nth-child(1) > .pay_base-input-v2')
      .type('12/24');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2')
      .type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2')
      .type('ZHERDIN ALEXANDR');
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').type('56456');

  })
})

// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
   cy.get('.payment__submit-button')
      .should('be.visible')
      .should('be.enabled')
      .click();
  cy.contains('Покупка прошла успешно').should('be.visible');
  
}


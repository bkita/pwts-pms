# pwts-pms

**Playwright with TypeScript - Parcel Management System**

Projekt demonstracyjny pokazujący jak pisać testy automatyczne UI i API używając Playwright i TypeScript.

## 📋 Opis projektu

To repozytorium zawiera przykładowe testy automatyczne dla aplikacji webowej PMS (Parcel Management System). Projekt demonstruje:

- ✅ Testy UI (interfejsu użytkownika)
- ✅ Testy API (REST API)
- ✅ Page Object Model pattern
- ✅ Konfigurację Playwright
- ✅ TypeScript best practices

## 🚀 Szybki start

### Wymagania wstępne

- Node.js (wersja 18 lub wyższa)
- npm lub yarn

### Instalacja

1. Sklonuj repozytorium:
```bash
git clone https://github.com/bkita/pwts-pms.git
cd pwts-pms
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Zainstaluj przeglądarki Playwright:
```bash
npx playwright install
```

## 🧪 Uruchamianie testów

### Wszystkie testy
```bash
npx playwright test
```

### Testy UI
```bash
npx playwright test tests/ui
```

### Testy API
```bash
npx playwright test tests/api
```

### Tryb headed (z widoczną przeglądarką)
```bash
npx playwright test --headed
```

### Tryb debug
```bash
npx playwright test --debug
```

### Konkretny plik testowy
```bash
npx playwright test tests/ui/pms-add-parcel.spec.ts
```

## 📊 Raporty

Po wykonaniu testów, raport HTML jest automatycznie generowany:

```bash
npx playwright show-report
```

## 📁 Struktura projektu

```
pwts-pms/
├── pages/                      # Page Object Models
│   └── LoginPage.ts           # Strona logowania
├── tests/
│   ├── api/                   # Testy API
│   │   └── read-user-by-id.spec.ts
│   └── ui/                    # Testy UI
│       └── pms-add-parcel.spec.ts
├── playwright.config.ts       # Konfiguracja Playwright
├── package.json
├── tsconfig.json             # Konfiguracja TypeScript
└── README.md
```

## 🔧 Konfiguracja

### playwright.config.ts

Główna konfiguracja projektu zawiera:
- `baseURL`: Adres testowanej aplikacji
- `trace`: Zbieranie trace'ów dla debugowania
- `projects`: Konfiguracja przeglądarek (Chromium, Firefox, WebKit)
- `reporter`: Format raportów

### tsconfig.json

Konfiguracja TypeScript dla projektu.

## 📝 Przykładowe testy

### Test UI - Dodawanie paczki
```typescript
test('login as user and add parcel', async ({ page }) => {
  await page.goto('/pms');
  await page.getByLabel('Username').fill('user');
  await page.getByLabel('Password').fill('user123');
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByLabel('Parcel Name').fill('paczka z zabawkami');
  // ... dalsze kroki
});
```

### Test API - Odczyt użytkownika
```typescript
test('Read user by id', async ({ request }) => {
  const response = await request.get(API_URL);
  
  expect(response.status()).toBe(200);
  expect(responseBody).toHaveProperty('username', 'Bret');
});
```

## 🎯 Page Object Model

Projekt wykorzystuje wzorzec Page Object Model dla lepszej organizacji kodu:

```typescript
// pages/LoginPage.ts
export class LoginPage {
  // selektory i metody dla strony logowania
}
```

## 🛠️ Technologie

- **Playwright** (^1.57.0) - Framework do testów automatycznych
- **TypeScript** - Statyczne typowanie
- **Node.js** - Runtime environment
- **ts-node** - Wykonywanie TypeScript w Node.js

## 📚 Przydatne linki

- [Dokumentacja Playwright](https://playwright.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Aplikacja testowa PMS](https://pwts.dev/pms)

## 👤 Autor

**Bartosz Kita** [@bkita](https://github.com/bkita) x [AkademiaQA.pl](https://akademiaqa.pl)

## 📄 Licencja

ISC
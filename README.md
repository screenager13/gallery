# To-Do List

Prosta aplikacja typu lista zadań, stworzona z użyciem Reacta, TypeScriptu, Reduxa i Material UI. Umożliwia dodawanie, edytowanie, oznaczanie zadań jako ukończone oraz ich usuwanie. Stan aplikacji zapisywany jest w przeglądarce, dzięki czemu lista zostaje zachowana po odświeżeniu strony.

---

## Użyte technologie

- **React** – interfejs użytkownika
- **TypeScript** – typowanie i większa kontrola nad kodem
- **Redux Toolkit** – zarządzanie stanem
- **redux-persist** – zapis danych w `localStorage`
- **Material UI (MUI)** – komponenty i stylowanie (ciemny motyw)
- **Vite** – środowisko developerskie
- **ESLint** – kontrola jakości kodu

---

## Co potrafi aplikacja

- Dodawanie nowych zadań
- Edytowanie zadania bezpośrednio na liście
- Oznaczanie jako zrobione
- Usuwanie zadania
- Zachowanie listy po zamknięciu lub odświeżeniu przeglądarki
- Stylowy, ciemny motyw z własnymi kolorami

---

## Jak uruchomić

1. Sklonuj repozytorium:
   ```
   git clone https://github.com/twoj-login/nazwa-repozytorium.git
   ```

2. Przejdź do katalogu i zainstaluj zależności:
   ```
   cd todo-list
   npm install
   ```

3. Uruchom aplikację:
   ```
   npm run dev
   ```

---

## Struktura projektu

```
src/
├── components/     → komponent interfejsu
├── store/          → konfiguracja Reduxa
├── theme.ts        → własny motyw kolorystyczny
├── App.tsx         → kontener aplikacji
└── main.tsx        → punkt wejścia z ThemeProviderem
```

## Autor

Projekt utworzony w celach nauki i testowania współczesnych technologii frontendowych.

# Design System for CTT EDI: Liquid Glass Edition (2026)

## 1. Core Visual Language: "Refractive Fluidity"

Мы создаем эффект многослойности. Контент не просто лежит на фоне, он «плавает» внутри стеклянных панелей с разным индексом преломления.

* **Physicality:** Использование `backdrop-filter: blur()` и `saturate()` для создания эффекта матового стекла.
* **Motion:** Все переходы — через `bezier-curves`. Элементы не появляются, а «проявляются» или «вплывают».
* **Depth:** Использование Z-оси. При скролле слои движутся с разной скоростью (мягкий параллакс).

## 2. Color Palette (Deep Ocean & Electric Glow)

* **Base:** `Deep Black #050505` — бесконечная глубина.
* **Glass Surface:** `rgba(255, 255, 255, 0.03)` — едва заметная текстура стекла.
*  **Accent 1 (The Energy):** `Electric Green #0FA85F` — используется для активных элементов и «свечения» сквозь стекло.


* **Accent 2 (The Fluid):** `Mesh Gradients` (Dark Emerald → Deep Indigo) — анимированные пятна на фоне, создающие движение.
* **Text:** `Ice White #F8FAFC` (Headings), `Slate-400` (Body) — для идеального контраста.

## 3. Typography: Architectural & Crisp

* **Headings:** `Satoshi Variable` или `Geist Sans`. Очень крупные кегли (96px+), отрицательный `letter-spacing` (-0.04em) для эффекта мощи.
* **Body:** `Inter Tight`. Вес 400, межстрочный интервал `1.6` для максимального «воздуха».
* **Captions:** `JetBrains Mono` для технических параметров — подчеркивает точность системы.

## 4. Layout: The Bento Grid Evolution

* **Structure:** Использование адаптивной сетки Bento (разные по размеру скругленные блоки).
* **Margins:** Экстремальные отступы (Section Padding: 160px). Контент должен «дышать».
* **Edges:** Скругления углов — `24px` или `32px`, чтобы смягчить строгую геометрию.

## 5. Liquid Components

* **Glass Cards:** Тонкая обводка `1px` (полупрозрачный градиент), внутреннее свечение (inner glow) и `blur` фона.
* **The "Flow" Button:**
* *Default:* Прозрачное стекло с зеленой обводкой.
* *Hover:* Заполнение цветом `Electric Green` с эффектом «растекания» из центра и мягким свечением (glow).
* **Interactive Inputs:** При фокусе стекло под курсором «подсвечивается», как будто за ним перемещается фонарик.

## 6. Motion Strategy (Smooth Transitions)

* **Page Transitions:** Бесшовный переход (Smart Animate), когда элементы одной страницы плавно трансформируются в элементы другой.
* **Micro-interactions:** При наведении на карточку — мягкое увеличение и изменение угла преломления (tilt effect).

---

## [STITCH_CONFIG]

```json
{
  "theme": "ultra_dark_liquid",
  "style": "liquid_glassmorphism",
  "primaryColor": "#0FA85F",
  "secondaryColor": "#050505",
  "effects": {
    "blurStrength": "20px",
    "glassOpacity": 0.05,
    "animationCurve": "cubic-bezier(0.22, 1, 0.36, 1)"
  },
  "typography": {
    "headings": "Satoshi Bold",
    "body": "Inter Tight"
  },
  "visuals": {
    "backgroundType": "animated_mesh_gradient",
    "borderRadius": "24px",
    "borders": "1px_glass_gradient"
  }
}

```

[/STITCH_CONFIG]

# WavePlayerJS
WavePlayerJS is a simple web app that allows you to enter a math formula for a custom waveform and hear what it sounds like. Everything is in a single `.html` file (including the CSS and JavaScript), so you don't need to download multiple files (and you can just save the program in your Downloads folder if you want - it doesn't create other files).\
ChatGPT created the code for this program and I made a few modifications.

<img width="1269" height="800" alt="screenshot" src="https://github.com/user-attachments/assets/58fcd5a6-5bf1-456f-a9f9-2bff6e8651fe" />

## Using the Program
Type or paste your wave formula into the big text box. Make sure you include the variables `vf` and `va` in your formula (these are for setting frequency and amplitude). If you want to, you can also include an optional parameter variable in your formula with `vp`. This can do whatever you want and is usually used to change the shape of the wave.

## Using Presets
Inside the `presets` folder, you will find some markdown files that contain some wave formulas that you can try. For the preset that you want to use, copy the formula labelled as _JS_ and paste it into the web app.\
If you want to see what one of these preset waveforms looks like, open [GeoGebra](https://www.geogebra.org/) in your web browser (or use the desktop app) and copy the formula labelled _GGB_ into the input box in the left sidebar.

## Converting GGB to JS
Converting a GeoGebra formula into JavaScript that this web app will recognize is pretty easy. I recommend looking at the `Presets.md` file and comparing the GGB and JS versions of one of the presets, but here's a quick guide:
- Change `sin()` to `Math.sin()`
  - This also applies to `cos()`, `tan()`, and other functions.
- Change `sin^(-1)()` to `Math.asin`
  - This also applies to inverse cosine and tangent (and their hyperbolic versions).
- Change `Pi` (or the Pi symbol) to `Math.PI` (make sure `PI` is all-caps)
- Replace blank space with `*`
  - In a place where multiplication should be performed, use an asterisk. GeoGebra defaults to using a blank space when you copy to clipboard, and this won't work.
- Change exponents to `**`
  - GeoGebra uses the caret symbol (`^`) for exponents, but JavaScript uses 2 asterisks. JS treats `^` as a bitwise XOR operation.
- Add extra brackets (if you need to)

Again, it's probably best to compare GGB and JS versions of the same formula in the `Presets.md` file. It will probably be easier to learn that way.

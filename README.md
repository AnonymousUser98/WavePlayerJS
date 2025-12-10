# WavePlayerJS
WavePlayerJS is a simple web app that allows you to enter a math formula for a custom waveform and hear what it sounds like. If you want to convert a wave equation to audio, then this app is for you. I made this because I couldn't find any programs like this and I thought it should exist.\
ChatGPT helped me with a lot of this program.

<!-- OUTDATED SCREENSHOTS - COMMENTED OUT
<img width="1269" height="800" alt="screenshot" src="https://github.com/user-attachments/assets/58fcd5a6-5bf1-456f-a9f9-2bff6e8651fe" />
<img width="1339" height="652" alt="screenshot" src="https://github.com/user-attachments/assets/adde6428-6801-414c-bbeb-04a5ddc296a7" />
-->

<img width="1340" height="639" alt="screenshot" src="https://github.com/user-attachments/assets/b3489d1c-963b-4fa1-9129-602e6fe0106d" />


## Using the Program
Type or paste your wave formula into the big text box. Make sure you include the variables `vf` and `va` in your formula (these are for setting frequency and amplitude). If you want to, you can also include an optional parameter variable in your formula with `vp`. This can do whatever you want, but it's usually used to change the shape of the wave.

## Using Presets
Inside the `presets` folder, you will find some markdown files that contain some wave formulas that you can try. For the preset that you want to use, copy the formula labelled as _JS_ and paste it into the web app.\
If you want to see what one of these preset waveforms looks like, open [GeoGebra](https://www.geogebra.org/) in your web browser (or use the desktop app) and copy the formula labelled _GGB_ into the input box in the left sidebar.

You can also access some of the presets with the _Load Preset_ button, but not all presets are included in this feature.

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

Again, it's probably best to compare GGB and JS versions of the same formula in the `Presets.md` file. I found it easier to learn that way.

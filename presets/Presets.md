## Common Waves

**Sine Wave:** `Math.sin(t*vf)*va`

**Square Wave:** `Math.sign(Math.sin(t*vf))*va`

**Triangle Wave:** `(2/Math.PI)*Math.asin(Math.sin(2*t*vf))*va`

**Triangle Wave (GGB):** `(2/Pi)*asin(sin(2*t*vf))*va`



## Hybrid Wave

**GGB:** `(sin(t vf)*((2)/(π)) sin^(-1)(sin(2 t vf))+sgn(sin(t vf)))*((1.84)/(π)) va`

**JS:** `((Math.sin(t*vf)*((2)/(Math.PI))*Math.asin(Math.sin(2*t*vf))+Math.sign(Math.sin(t*vf)))*((1.84)/(Math.PI)))*va`



## Modified Hybrid Wave

**GGB:** `((sin(t vf)*((2)/(π)) sin^(-1)(sin(2 t vf))+sgn(sin(t vf)))*((0.54)/(π))+(sin(t vf)*((2)/(π)) sin^(-1)((sin(2 t vf))^(vp))))*va`

**JS:** `((Math.sin(t*vf)*((2)/(Math.PI))*Math.asin(Math.sin(2*t*vf))+Math.sign(Math.sin(t*vf)))*((0.54)/(Math.PI))+(Math.sin(t*vf)*((2)/(Math.PI))*Math.asin((Math.sin(2*t*vf))**(vp))))*va`

*Parameter should be an integer; Polarity changes base pattern*



## Mountain Wave

**GGB**: `((2)/(π)) sin^(-1)(sin(t*2 vf)) va+((2)/(π)) tan(sin(t vf)) va vp`

**JS**: `(2/Math.PI)*Math.asin(Math.sin(2*t*vf))*va + (2/Math.PI)*Math.tan(Math.sin(t*vf))*va*vp`



## Cosine Sine Wave

**GGB:** `sin(cos(t vf) vp) va`

**JS:** `Math.sin(Math.cos(t*vf)*vp)*va`



## Spike Wave

**GGB:** `(sin(t vf))^(vp) va`

**JS**: `(Math.sin(t*vf)**vp)*va`

*Parameter (vp) should be an odd integer*



## Costan Wave

**GGB:** `cos(tan(t vf) vp) va`

**JS:** `Math.cos(Math.tan(t*vf)*vp)*va`



## Sintan Wave

**GGB:** `sin(tan(t vf)) va`

**JS:** `Math.sin(Math.tan(t*vf))*va`



## Pulse Wave

**GGB:** `sin(cos(t vf) (5+vp-1)) sin^(7)(t vf) va`

**JS**: `((Math.sin(Math.cos(t*vf)*(5+vp-1)))*((Math.sin(t*vf)**7)))*va`



## Noisy Sine Wave

**GGB:** `(((2)/(π)) sin^(-1)(sin(t vf) cos(tan(t vf)))+sin(t vf))*((va)/(2))`

**JS:** `(((2)/(Math.PI))*Math.asin(Math.sin(t*vf)*Math.cos(Math.tan(t*vf)))+Math.sin(t*vf))*((va)/(2))`



## Batman Wave

**GGB:** `((sin^(-1)(sin(t vf vp)))/(tan(t vf))) va`

**JS:** `((Math.asin(Math.sin(t*vf*vp)))/(Math.tan(t*vf)))*va`

*Parameter (vp) should be an odd integer other than 1*



## Parametric Trig Wave

**GGB:** `sinh^(-1)(tan(cos(t vf+cos(t vp vf)))) va`

**JS:** `Math.asinh(Math.tan(Math.cos(t*vf+Math.cos(t*vp*vf))))*va`



## Insect Wave

**GGB:** `sin(tanh^(-1)(sin(t vf))) va`

**JS:** `Math.sin(Math.atanh(Math.sin(t*vf)))*va`

*It makes a buzzing sound, like an insect*



## Needle Wave

**GGB:** `((sin(tanh^(-1)(sin(t * vf))) * va sinh^(-1)(tan(cos(t * vf + cos(t * vf)))) * va)/(sin(cos(t * vf)) * va))`

**JS:** `((Math.sin(Math.atanh(Math.sin(t*vf)))*va*Math.asinh(Math.tan(Math.cos(t*vf+Math.cos(t*vf))))*va)/(Math.sin(Math.cos(t*vf))*va))`



## Nested Sine Wave

**GGB:** `sin(t vf+sin(t vf vp)) va`

**JS:** `Math.sin((t*vf)+Math.sin(t*vf*vp))*va`

*Works well if parameter is an even integer*



## Nested Cosine Sine Wave

**GGB:** `sin(cos(t * vf) * vp) * va sin(t * vf + sin(t * vf * vp)) * va`

**JS:** `(Math.sin(Math.cos(t*vf)*vp)*va)*(Math.sin((t*vf)+Math.sin(t*vf*vp))*va)`

*Works well if parameter is an integer*



## Fin Wave

**GGB:** `((2)/(π)) sin^(-1)(sin(t vf))*((2)/(π)) cos^(-1)(cos(t vf)) va`

**JS:** `(((2)/(Math.PI))*Math.asin(Math.sin(t*vf)))*(((2)/(Math.PI))*Math.acos(Math.cos(t*vf)))*va`



## Trisine Wave

**GGB:** `sin^(-1)(sin(2 t vf) sin(t vf))+sin^(-1)(sin(2 t vf)) sin^(-1)(sin(t vf*5)) va`

**JS:** `Math.asin(Math.sin(2*t*vf)*Math.sin(t*vf))+Math.asin(Math.sin(2*t*vf))*Math.asin(Math.sin(t*vf*5))*va`



## Trisine Mountain Wave

**GGB:** `(sin^(-1)(sin(t vf+sin(t vf)))+sin^(-1)(cos(t vf-5))) va`

**JS:** `(Math.asin(Math.sin((t*vf)+Math.sin(t*vf)))+Math.asin(Math.cos(t*vf-5)))*va`



## Lightning Wave

**GGB:** `(sin^(5)(t vf*2)+sin(t vf)-sin^(-1)(sin(t vf*2)) sin^(-1)(cos(t vf*2))-sin(tan(t vf*9))) va`

**JS:** `((Math.sin(t*vf*2)**5)+Math.sin(t*vf)-Math.asin(Math.sin(t*vf*2))*Math.asin(Math.cos(t*vf*2))-Math.sin(Math.tan(t*vf*9)))*va`



## Drip Wave

**GGB:** `(((2)/(π)) sin^(-1)(sin(t vf))+sin^(19)(t vf)) va`

**JS:** `(((2)/(Math.PI))*Math.asin(Math.sin(t*vf))+(Math.sin(t*vf))^19)*va`



## Bird Wave

**GGB:** `((2)/(π)) sin^(-1)(sin(2 t vf)) sin(t vf)*1.4 va`

**JS:** `(((2)/(Math.PI))*Math.asin(Math.sin(2*t*vf))*Math.sin(t*vf)*1.4)*va`



## M/W Wave

**GGB:** `sin(tan^(-1)(sin(t vf))+sin^(-1)(sin(3 t vf))) va`

**JS:** `(Math.sin(Math.atan(Math.sin(t*vf))+Math.asin(Math.sin(3*t*vf))))*va`



## Bird Dip Wave

**GGB:** `sin(t vf) cos^(2)(tan(t vf) cos(t*3 vf)) va`

**JS:** `Math.sin(t*vf)*(Math.cos(Math.tan(t*vf)*Math.cos(t*3*vf))**2)*va`



## Double Helix Square Wave

**GGB:** `sin(tan(cos(t vf)) sgn(sin(t*3 vf))) va`

**JS:** `Math.sin(Math.tan(Math.cos(t*vf))*Math.sign(Math.sin(t*3*vf)))*va`



## Noisy Infinity Wave

**GGB:** `sin(tan(t vf) sgn(cos(t*99999 vf))) va`

**JS:** `Math.sin(Math.tan(t*vf)*Math.sign(Math.cos(t*99999*vf)))*va`



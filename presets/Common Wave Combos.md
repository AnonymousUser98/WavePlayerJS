## Garfield Wave

*(TriWave/SinWave)\*va*



`((2/Math.PI)\*Math.asin(Math.sin(2\*t\*vf))\*va/Math.sin(t\*vf)\*va)\*va`



## Pointy Mountain Wave

*TriWave\*((SinWave+TriWave)/(SqrWave))*



`(2/Math.PI)\*Math.asin(Math.sin(2\*t\*vf))\*va\*((Math.sin(t\*vf)\*va+(2/Math.PI)\*Math.asin(Math.sin(2\*t\*vf))\*va)/(Math.sign(Math.sin(t\*vf))\*va))`





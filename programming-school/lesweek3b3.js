function driehoek(hoogte, lengte){//argumenten?

    //pythagoras wortel ( (x*x) + (y*y))
    let driehoek =((lengte*lengte) / (hoogte * hoogte))
    return driehoek
}
 
 
 
 let kubus = driehoek(15, 10 );
 console.log(kubus);
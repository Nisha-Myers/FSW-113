// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.
export function nightMode(data) {
    if(data.dt < data.sys.sunrise){
        return "black"
    }else{
        return "blue"
    }
}
var reverseString = function(s) 
{
    var count=0;
    var temp;
    var x=s.length-1;
    while(x>=0)
        {
            temp=s[count];
            
            s[count]=s[x];
            s[x]=temp;
            
            count++;
            x--;
            
            if(x<=count)
                {
                    return s;
                }
        }
};
console.log(reverseString( ["h","e","l","l","o"] ));
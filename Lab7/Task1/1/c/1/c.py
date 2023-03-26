import math
a=int(input())
b=int(input())
s=str()
for i in range(a, b+1):
    if math.sqrt(i)==int(math.sqrt(i)):
        s=s+str(i)+" "
print(s)

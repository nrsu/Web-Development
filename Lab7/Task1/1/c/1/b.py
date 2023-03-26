a=int(input())
b=int(input())
c=int(input())
d=int(input())
s=str()
for i in range(a,b+1):
    if i%d==c:
        s=s+str(i)+" "
print(s)
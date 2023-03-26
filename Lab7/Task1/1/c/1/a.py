a=int(input())
b=int(input())
c=str()
for i in range(a, b+1):
    if i%2==0:
        c=c+str(i)+" "
print(c)
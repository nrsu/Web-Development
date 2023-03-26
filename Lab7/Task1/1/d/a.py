x=input()
a=[int(x) for x in x.split()]
s=str()
cnt=0
for i in a:
    if cnt%2==0:
        s=s+str(i)+" "
    cnt+=1
print(s)
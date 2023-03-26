n = float(raw_input())
plant = set()
sum_p = 0
for x in raw_input().split(' '):
  if x not in plant:
    plant.add(x)
    sum_p += float(x)
print sum_p/float(len(plant))
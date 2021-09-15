has_high_income = True
has_good_credit = True
has_criminal_record = False

#both true
if has_high_income and has_good_credit:
    print('Eligible for loan !')


#atleast one true
if has_high_income or has_good_credit:
    print('May Eligible for loan !')

#not -> inverse
if has_good_credit and not has_criminal_record:
    print('May Eligible for loan !')

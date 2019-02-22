import re

str_re = "([a-z]+)([0-9]*)"
nat_re = "[0-9]+"
snat_re = "([-|+])([0-9]+)"
ops_re = "[<|>|=|>=|<=|<>]"
lit_re =  "[\"][\w+|\][\W]"
regex_list = [str_re, nat_re, snat_re, ops_re, lit_re]

token_types = {
    "Identifier": "Variable names and data-types.",
    "Relation": "Relational operators between two operands",
    "Number": "Signed or unsigned natural numbers",
    "Literal": "Anything between (\" \")"
}

with open("inputfile_exp_8.txt", "r") as file:    
    matched_tokens = []
    tokens = file.read().strip().split(" ")
    for token in tokens:
        for regex in regex_list:
            rule = re.match(regex, token)
            if rule:
                # print("matched!")
                if (regex == str_re):
                    matched_tokens.append((token, "Identifier"))
                elif (regex == nat_re):
                    matched_tokens.append((token, "Number"))
                elif (regex == snat_re):
                    matched_tokens.append((token, "Number"))
                elif (regex == ops_re):
                    matched_tokens.append((token, "Operator"))
                elif (regex == lit_re):
                    matched_tokens.append((token, "Literal"))
            else:
                # print("No match!")
                continue

print("The matched tokens and their types are:\n")
for (token, retype) in matched_tokens:
    print(token, ":\t", retype)
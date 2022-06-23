$localGroupsAdm = Get-LocalGroupMember "Administrators" | Select-Object @{Label = "Type"; Expression = { $_.ObjectClass } },
@{Label = "Name"; Expression = { $_.Name } },
@{Label = "Source"; Expression = { $_.PrincipalSource } }


return $localGroupsAdm | convertTo-Json
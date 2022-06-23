$localUsers = Get-LocalUser | Select-Object Name, Description, AccountExpires, Enabled, PasswordChangeable, PasswordExpires, UserMayChangePassword, PasswordRequired, LastLogon, PrincipalSource, ObjectClass

return $localUsers | convertTo-Json
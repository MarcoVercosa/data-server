$server = $args[0]
$userName = $args[1]
$password = $args[2]

$pwdSecureString = ConvertTo-SecureString -Force -AsPlainText $password
$credential = New-Object -TypeName System.Management.Automation.PSCredential `
    -ArgumentList $userName, $pwdSecureString

#$credential.GetNetworkCredential().Domain
#$credential.GetNetworkCredential().UserName
#$credential.GetNetworkCredential().Password


#$credencial = Get-Credential

$conexao = New-PSSession -ComputerName $server -Credential $credential -ErrorAction SilentlyContinue  

if ($conexao -ne $null) { 
    $dataReturn = invoke-Command -Session $conexao -FilePath src\scripts\cpu\cpu.ps1 -ErrorAction SilentlyContinue -WarningAction SilentlyContinue 
    return $dataReturn
}

else {    
    return "<h2> Server $server is not accessible or credentials are incorrect </h2>"
}
    
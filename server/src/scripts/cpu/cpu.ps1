$ErrorActionPreference = 'silentlycontinue'
$WarningPreference = 'silentlycontinue'

Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Force -ErrorAction SilentlyContinue 

$percentageCPU = Get-CimInstance win32_processor | Measure-Object -Property LoadPercentage -Average
$numberProcesses = (Get-Process).count
$cpu = Get-WmiObject win32_Processor |
Select-Object Name, Caption, Manufacturer, MaxClockSpeed, NumberOfCores, L2CacheSize, L3CacheSize, @{Label = "Number process"; Expression = { $numberProcesses } }, @{Label = "Usage %"; Expression = { $percentageCPU.Average } }

#return $cpu | convertTo-Json


$cpuTopFiveProcess = Get-Process |  Sort-Object CPU -desc | Select -first 5 | Select-Object  @{Label = "ProcessName"; Expression = { $_.ProcessName } }, @{Label = "ID"; Expression = { $_.id } }, @{Label = "CPU"; Expression = { $_.cpu } }, @{Label = "User Name"; Expression = { $_.username } }, @{Label = "Description"; Expression = { $_.Description } }

return $cpu, $cpuTopFiveProcess | convertTo-Json
$totalRam = [math]::Round((Get-WmiObject Win32_OperatingSystem | Select -ExpandProperty TotalVisibleMemorySize) / 1MB, 2)
$freeRam = [math]::Round((Get-WmiObject Win32_OperatingSystem | Select -ExpandProperty FreePhysicalMemory) / 1MB, 2)
$ramMemory = Get-WmiObject Win32_OperatingSystem  | Select-Object @{Label = "TotalRAM"; Expression = { $totalRam } }, @{Label = "FreeRAM"; Expression = { $freeRam } }


$memoryTopFiveProcess = Get-Process |  Select-Object name, id, @{Label = "ProcessGB"; Expression = { $_.WorkingSet } } | Sort-Object 'ProcessGB' -Descending | Select -first 5
for ($i = 0; $i -lt @($memoryTopFiveProcess).length; $i++) {
    $memoryTopFiveProcess[$i]."ProcessGB" = [math]::Round($memoryTopFiveProcess[$i]."ProcessGB" / 1GB, 1)
}

return $ramMemory, $memoryTopFiveProcess | convertTo-Json
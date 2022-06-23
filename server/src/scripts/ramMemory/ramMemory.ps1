$totalRam = [math]::Round((Get-WmiObject Win32_OperatingSystem | Select -ExpandProperty TotalVisibleMemorySize) / 1MB, 2)
$freeRam = [math]::Round((Get-WmiObject Win32_OperatingSystem | Select -ExpandProperty FreePhysicalMemory) / 1MB, 2)
$ramMemory = Get-WmiObject Win32_OperatingSystem  | Select-Object @{Label = "Total RAM"; Expression = { $totalRam } }, @{Label = "Free RAM"; Expression = { $freeRam } }


$memoryTopFiveProcess = Get-Process |  Select-Object name, id, @{Label = "Process (GB)"; Expression = { $_.WorkingSet } } | Sort-Object 'Process (GB)' -Descending | Select -first 5
for ($i = 0; $i -lt @($memoryTopFiveProcess).length; $i++) {
    $memoryTopFiveProcess[$i]."Process (GB)" = [math]::Round($memoryTopFiveProcess[$i]."Process (GB)" / 1GB, 1)
}

return $ramMemory, $memoryTopFiveProcess | convertTo-Json
$ErrorActionPreference = 'silentlycontinue'
$WarningPreference = 'silentlycontinue'

Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Force -ErrorAction SilentlyContinue 

$getDisks = Get-WmiObject Win32_LogicalDisk -Filter "DriveType=3" | Select-Object @{Label = "driveLetter"; Expression = { $_.DeviceID } },
@{Label = "name"; Expression = { $_.VolumeName } },
@{Label = "free"; Expression = { [Math]::Round(($_.FreeSpace / 1GB), 2) } }, 
@{Label = "total"; Expression = { [Math]::Round(($_.Size / 1GB), 2) } }, 
@{Label = "providerName"; Expression = { $_.FileSystem } }, @{ label = 'FreePercent'; expression = { [Math]::Round(($_.freespace / $_.size) * 100, 2) } }

$diskStorageDetail = get-PhysicalDisk | Select-Object DeviceId, MediaType, BusType, OperationalStatus, @{Label = "SizeGB"; Expression = { [Math]::Round(($_.Size / 1GB), 2) } }, HealthStatus

return $getDisks, $diskStorageDetail | convertTo-Json
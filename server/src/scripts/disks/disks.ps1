$ErrorActionPreference = 'silentlycontinue'
$WarningPreference = 'silentlycontinue'

Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Force -ErrorAction SilentlyContinue 

$getDisks = Get-WmiObject Win32_LogicalDisk -Filter "DriveType=3" | Select-Object @{Label = "Drive Letter"; Expression = { $_.DeviceID } },
@{Label = "Name"; Expression = { $_.VolumeName } },
@{Label = "Free (GB)"; Expression = { “{0:N2}” -f ($_.FreeSpace / 1GB) } }, 
@{Label = "Total (GB)"; Expression = { [Math]::Round(($_.Size / 1GB), 2) } }, 
@{Label = "provider name"; Expression = { $_.FileSystem } }, 
@{label = 'FreePercent'; expression = { [Math]::Round(($_.freespace / $_.size) * 100, 2), "%" } }

$diskStorageDetail = get-PhysicalDisk | Select-Object DeviceId, MediaType, BusType, OperationalStatus, @{Label = "Size (GB)"; Expression = { [Math]::Round(($_.Size / 1GB), 2) } }, HealthStatus

return $getDisks, $diskStorageDetail | convertTo-Json
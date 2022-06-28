$htmlMenu = @"
<div class="dropdown">
        <button class="dropbtn">MENU</button>
        <div class="dropdown-content">
            <a href="#Sistemaoperacional">Sistema operacional</a>
            <a href="#cpu">CPU</a>
            <a href="#cputopprocessos">CPU TOP 5</a>
            <a href="#sessoesativas">Sessoes ativas</a>
            <a href="#memoriaram">Memoria RAM</a>
            <a href="#memoriatopprocess">Memoria RAM Top 5</a>           
            <a href="#placagrafica">Placa grafica</a>
            <a href="#computador">Computador</a>
            <a href="#bios">BIOS</a>
            <a href="#usuarioslocais">Usuarios locais</a>
            <a href="#administrators">'Administrators' Group</a>
            <a href="#remotedesktopuser">'Remote Desktop Users' Group</a>
            <a href="#discos">Discos</a>
            <a href="#discostoragedetail">Discos (Storage Detail)</a>
            <a href="#clustergroup">Cluster Group</a>
            <a href="#clusternode">Cluster Node</a>
            <a href="#servicosparados">Servicos parados</a>
            <a href="#servicosexecucao">Servicos em execucao</a>
            <a href="#servicosparadosautomatic">Servicos parados (Auto)</a>
            <a href="#hotfix">Hot Fix</a>
            <a href="#rededetalhes">Rede detalhes</a>
            <a href="#rotas">Rotas</a>
            <a href="#persistenterotas">Persistents Routes</a>
            <a href="#softwaresinstalados">Softwares instalados</a>
        </div>
    </div>

"@

$style = @"
	<title>$($COMPUTERNAME) Inventory</title>
	<style>
        html{
            scroll-behavior: smooth;
        }
		body {
			background-color: #282A36;
			font-family: sans-serif;
            animation-duration: 2.3s;
            animation-name: slidein;
		}
        @keyframes slidein {
            from {
                    opacity: 0;
                 }  
            to {
                opacity: 1;
                 }
        }

            
		h1 {
			color: #FF7575;
		}
		h2 {
            margin-top: 65px;
			color: white;
		}
		table {
			background-color: #363949;
            border-collapse: collapse;
            width: 50% !important;
            margin: 0 auto;
            animation-duration: 1s;
            animation-name: tableanimation;
            /* tabela inicia oculta por default */
            display: none;
		}

        @keyframes tableanimation {
            from {
                opacity: 0;
            }  
            to {
                opacity: 1;
            }
        }

        tr{
            -webkit-transition: 0.5s ease-in;
            -moz-transition: 0.5s ease-in;
            -o-transition: 0.5s ease-in;
            transition: 0.5s ease-in;
        }
        table tbody tr:hover td{
            background-color: #84767f;
            -webkit-transition: 0.5s ease-in;
            -moz-transition: 0.5s ease-in;
            -o-transition: 0.5s ease-in;
            transition: 0.5s ease-in;

        }
		td {
			border: 2px solid #282A36;
			background-color: #363949;
			color: #FF7575;
			padding: 5px;
		}
		th {
			border: 2px solid #282A36;
			background-color: #363949;
			color: #FF7575;
			text-align: left;
			padding: 5px;
		}
        h5{
            display: inline;
            color: yellow;
        }

        .green{
            background-color: green
        }
        .yellow{
            background-color: yellow;
            color: black;
        }
        .red{
            background-color: red;
            color: black;
        }


        /* ######### Style botao Menu ######## */
        /* ######### Style botao Menu ######## */
        /* ######### Style botao Menu ######## */

        .dropdown-content::-webkit-scrollbar {
            width: 12px;
            /* largura scrollbar */
            border-radius: 300px;
        }

        .dropdown-content::-webkit-scrollbar-track {
            background: rgb(248, 72, 72);
            border-radius: 300px;
            /* color da tracking area */
        }

        .dropdown-content::-webkit-scrollbar-thumb {
            background-color: rgb(90, 90, 90);
            /* color of the scroll thumb */
            border-radius: 20px;
            /* roundness of the scroll thumb */
            border: 3px solid rgb(248, 72, 72);
            /* creates padding around scroll thumb */
            border-radius: 300px;
        }

        .dropdown {
            margin-top: 27px;
            margin-left: 5px;
            display: inline-block;
            position: fixed;
        }

        /* Dropdown botao */
        .dropbtn {
            padding: 0.9em 2em;
            color: #fff;
            cursor: pointer;
            font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */
            letter-spacing: 0.2rem;
            font-weight: 900;
            border: none;
            outline: none;
            background-color: red;
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 10px;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
        }

        .dropbtn:before {
            content: "";
            background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
            );
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            -webkit-filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing-button-85 20s linear infinite;
            transition: opacity 0.3s ease-in-out;
            border-radius: 10px;
        }

        @keyframes glowing-button-85 {
            0% {
                background-position: 0 0;
            }
            50% {
                 background-position: 400% 0;
            }
            100% {
                background-position: 0 0;
            }
       }

        .dropbtn:after {
            z-index: -1;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgb(83, 83, 83);
            left: 0;
            top: 0;
            border-radius: 10px;
        }

        /* Dropdown Content (oculto por Default) */
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #646464;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
            font-weight: 900;
            border-radius: 15px;
            height: 420px;
            overflow-y: scroll;
            width: 300px
        }

        /* Links dentro do dropdown */
        .dropdown-content a {
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            position: relative;
            z-index: 10;
            border-style: solid;
            border-top: 0.1px;
            border-color: rgb(66, 66, 66);
        }

        /* muda cor dropdown no hover */
        .dropdown-content a:hover {
            background-color: rgb(248, 72, 72);
            border-radius: 15px;
        }

        /* mostra menu no hover */
        .dropdown:hover .dropdown-content {
            display: block;
            animation-duration: 0.5s;
            animation-name: slideinMenu;
        }


        @keyframes slideinMenu {
            from {
                margin-left: -100%;
            }

            to {
                margin-left: 0%;
            }
        }

       /* ######### Style botao mostrar/ocultar Tabela  ######## */
       /* ######### Style botao mostrar/ocultar Tabela  ######## */
       /* ######### Style botao mostrar/ocultar Tabela  ######## */
       
       #showhidebutton {
            background-color: #cf245f;
            background-image: linear-gradient(to bottom right, #fcd34d, #ef4444, #ec4899);
            border: 0;
            border-radius: .25rem;
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
            font-size: 1.125rem; /* 18px */
            font-weight: 600;
            line-height: 1.75rem; /* 28px */
            padding: 0.7rem 1.25rem;
            text-align: center;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
        }

        #showhidebutton:hover {
            background-color: #ce4c79;
            background-image: linear-gradient(to bottom right, #fadd7d, #ee5e5e, #eb7bb3);
            box-shadow: none;
        }
	</style>           
"@


# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################
# #################################  SCRIPT  #################################

#Nao deixa que os erros e avisos que ocorrem no script interrompam a execucao
$ErrorActionPreference = 'silentlycontinue'
$WarningPreference = 'silentlycontinue'

Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Force -ErrorAction SilentlyContinue 

$COMPUTERNAME = hostname

$date = Get-Date -UFormat "%d%m%y"


######################### OS info ####################################
######################### OS info ####################################
######################### OS info ####################################

$os = Get-WmiObject -Class win32_operatingsystem |
Select-Object Caption, OSArchitecture, Version, ServicePackMajorVersion, TotalVisibleMemorySize, TotalVirtualMemorySize, BuildNumber, @{Label = "LastBootTime"; Expression = { $_.ConvertToDateTime($_.LastBootUpTime) } } |
ConvertTo-Html -fragment -as list -PreContent "<h5>$($COMPUTERNAME) => $(Get-Date)</h5><br><br><center><h2 id='Sistemaoperacional'>Sistema operacional</h2> <button id=showhidebutton onclick=MostrarOcultarTabelas('tableOS')>Mostrar/Ocultar</button> </center>" |
Out-String

$os = $os -replace "<table>", "<table class='tableOS'>"

######################### CPU info ####################################
######################### CPU info ####################################
######################### CPU info ####################################


$numberProcesses = (Get-Process).count
$cpu = Get-WmiObject win32_Processor |
Select-Object Name, Caption, Manufacturer, MaxClockSpeed, NumberOfCores, L2CacheSize, L3CacheSize, @{Label = "Number process"; Expression = { $numberProcesses } }, @{Label = "Usage %"; Expression = { "waiting cpu" } } |
ConvertTo-Html -Fragment -as list -PreContent "<center><h2 id='cpu'>CPU</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablecpu')>Mostrar/Ocultar</button> </center>" |
Out-String

$percentageCPU = Get-CimInstance win32_processor | Measure-Object -Property LoadPercentage -Average

# se media de uso da CPU for menor ou igual a 90%
if ($percentageCPU.Average -lt 90) {
    $cpu = $cpu -replace "<td>Usage %:</td>", "<td class=green >Media de uso Menor / Igual 90%:</td>"
    $cpu = $cpu -replace "<td>waiting cpu</td>", "<td class=green > $($percentageCPU.Average)% - OK </td>"       
       
}
# se media de uso da CPU for maior ou igual a 90% e menor ou igual a 95%
ElseIf (($percentageCPU.Average -gt 90) -and ($percentageCPU.Average -lt 95) ) {
    $cpu = $cpu -replace "<td>Usage %:</td>", "<td class=yellow >Media de uso Menor / Equal 95%:</td>"
    $cpu = $cpu -replace "<td>waiting cpu</td>", "<td class=yellow >$($percentageCPU.Average)% - Your performance is required </td>" 
}
# se media de uso da CPU for maior ou igual a 95%
ElseIf ( $percentageCPU.Average -gt 95) {
    $cpu = $cpu -replace "<td>Usage %:</td>", "<td class=red >Media de uso Maior / Igual  95%:</td>"
    $cpu = $cpu -replace "<td>waiting cpu</td>", "<td class=red > $($percentageCPU.Average)% - Your performance is extremely necessary</td>"       
}

$cpu = $cpu -replace "<table>", "<table class='tablecpu'>"


######################### CPU Top Five Process ####################################
######################### CPU Top Five Process ####################################
######################### CPU Top Five Process ####################################

$cpuTopFiveProcess = Get-Process |  Sort-Object CPU -desc | Select -first 5 | Select-Object  @{Label = "ProcessName"; Expression = { $_.ProcessName } }, @{Label = "ID"; Expression = { $_.id } }, @{Label = "CPU"; Expression = { $_.cpu } }, @{Label = "User Name"; Expression = { $_.username } }, @{Label = "Description"; Expression = { $_.Description } } |
ConvertTo-Html  -PreContent "<center><h2 id='cputopprocessos'>CPU Top 5 </h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablecpuTopFiveProcess')>Mostrar/Ocultar</button> </center>" |
Out-String
$cpuTopFiveProcess = $cpuTopFiveProcess -replace "<table>", "<table class='tablecpuTopFiveProcess'>"

######################### Memoria RAM info ####################################
######################### Memoria RAM info ####################################
######################### Memoria RAM info ####################################

$totalRam = [math]::Round((Get-WmiObject Win32_OperatingSystem | Select -ExpandProperty TotalVisibleMemorySize) / 1MB, 2)
$freeRam = [math]::Round((Get-WmiObject Win32_OperatingSystem | Select -ExpandProperty FreePhysicalMemory) / 1MB, 2)
$ramMemory = Get-WmiObject Win32_OperatingSystem  | Select-Object @{Label = "Total RAM"; Expression = { $totalRam } }, @{Label = "Free RAM"; Expression = { $freeRam } }, @{Label = "Alert"; Expression = { "waiting memory" } }  | 
ConvertTo-Html -Fragment -as list -PreContent "<center><h2 id='memoriaram'>Memoria RAM (GB)</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tableramMemory')>Mostrar/Ocultar</button> </center>" |
Out-String

# se a memoria disponível for maior ou igual 10%
if ([Math]::Round(($freeRam / $totalRam) * 100, 2) -gt 10) {
    $ramMemoryAlertJS = $null 
    $ramMemory = $ramMemory -replace "<td>waiting memory</td>", "<td class=green >OK</td>"       
}
# se a memoria disponível for menor que 10% e maior que 5%
ElseIf (([Math]::Round(($freeRam / $totalRam) * 100, 2) -lt 10) -and ([Math]::Round(($freeRam / $totalRam) * 100, 2) -gt 5) ) {
    $ramMemoryAlertJS = $null
    $ramMemory = $ramMemory -replace "<td>waiting memory</td>", "<td class=yellow >Your performance is required</td>"
}
# se a memoria disponível for menor q 5%
ElseIf (([Math]::Round(($freeRam / $totalRam) * 100, 2) -lt 5)) {
    $ramMemoryAlertJS = "true"
    $ramMemory = $ramMemory -replace "<td>waiting memory</td>", "<td class=red >Your performance is extremely necessary</td>"   
}

$ramMemory = $ramMemory -replace "<table>", "<table class='tableramMemory'>"

######################### Memory Top Five Process ####################################
######################### Memory Top Five Process ####################################
######################### Memory Top Five Process ####################################

$memoryTopFiveProcess = Get-Process |  Select-Object name, id, @{Label = "Process (GB)"; Expression = { $_.WorkingSet } } | Sort-Object 'Process (GB)' -Descending | Select -first 5

for ($i = 0; $i -lt @($memoryTopFiveProcess).length; $i++) {

    $memoryTopFiveProcess[$i]."Process (GB)" = [math]::Round($memoryTopFiveProcess[$i]."Process (GB)" / 1GB, 1)

}
$memoryTopFiveProcess = $memoryTopFiveProcess | 
ConvertTo-Html  -PreContent "<center><h2 id='memoriatopprocess'>Memoria RAM Top 5</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablememoryTopFiveProcess')>Mostrar/Ocultar</button> </center>" |
Out-String
$memoryTopFiveProcess = $memoryTopFiveProcess -replace "<table>", "<table class='tablememoryTopFiveProcess'>"


######################### Graficos ####################################
######################### Graficos ####################################
######################### Graficos ####################################

$GPU = Get-WmiObject win32_videocontroller |
Select-Object Name, MaxRefreshRate, VideoModeDescription, AdapterRAM, DriverVersion |
ConvertTo-Html -Fragment -as list -PreContent "<center><h2 id='placagrafica'>Placa grafica</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablegpu')>Mostrar/Ocultar</button> </center>" |
Out-String
$GPU = $GPU -replace "<table>", "<table class='tablegpu'>"

######################### Hardware info ####################################
######################### Hardware info ####################################
######################### Hardware info ####################################
# Hardware info
$computer = Get-WmiObject -Class win32_computersystem |
Select-Object Model, Name, SystemType |
ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='computador'>Computador</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablecomputer')>Mostrar/Ocultar</button> </center>" |
Out-String
$computer = $computer -replace "<table>", "<table class='tablecomputer'>"

######################### BIOS info ####################################
######################### BIOS info ####################################
######################### BIOS info ####################################

$bios = Get-WmiObject win32_bios |
Select-Object Name, Manufacturer, SerialNumber |
ConvertTo-Html -fragment -PreContent "<center><h2 id='bios'>BIOS</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablebios')>Mostrar/Ocultar</button> </center>" |
Out-String
$bios = $bios -replace "<table>", "<table class='tablebios'>"

######################### Sessoes ativas ####################################
######################### Sessoes ativas ####################################
######################### Sessoes ativas ####################################

$numUsers = Get-WmiObject Win32_OperatingSystem | Select -ExpandProperty NumberOfUsers
$sessionsOpened = Get-WmiObject Win32_OperatingSystem | Select -ExpandProperty NumberOfUsers |
Select-Object @{Label = "Sessions active"; Expression = { $numUsers } } |
ConvertTo-Html -fragment -PreContent "<center><h2 id='sessoesativas'>Sessoes ativas</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablesessionsOpened')>Mostrar/Ocultar</button> </center>" |
Out-String
$sessionsOpened = $sessionsOpened -replace "<table>", "<table class='tablesessionsOpened'>"

######################### Discos ####################################
######################### Discos ####################################
######################### Discos ####################################

$getDisks = Get-WmiObject Win32_LogicalDisk -Filter "DriveType=3" | Select-Object @{Label = "Drive Letter"; Expression = { $_.DeviceID } },
@{Label = "Name"; Expression = { $_.VolumeName } },
@{Label = "Free (GB)"; Expression = { “{0:N2}” -f ($_.FreeSpace / 1GB) } }, 
@{Label = "Total (GB)"; Expression = { [Math]::Round(($_.Size / 1GB), 2) } }, 
@{Label = "provider name"; Expression = { $_.FileSystem } }, 
@{label = 'FreePercent'; expression = { [Math]::Round(($_.freespace / $_.size) * 100, 2), "%" } },
@{label = 'Alert'; expression = { "waiting" } }

for ($i = 0; $i -lt @($getDisks).length; $i++) {
    # se disco for maior ou igual a 10%
    if ($getDisks[$i].freePercent -gt 10) {
        $getDiskAlertJS = $null
        $getDisks[$i].Alert = "low"          
    }

    # se disco for menor ou igual a 10% e maior ou igual a 5%
    ElseIf (($getDisks[$i].freePercent -lt 10) -and ($getDisks[$i].freePercent -gt 5)) {
        $getDiskAlertJS = $null
        $getDisks[$i].Alert = "high"  
    }
    # se disco for menor ou igual a 5%
    ElseIf ($getDisks[$i].freePercent -lt 5) {
        $getDiskAlertJS = "true"
        $getDisks[$i].Alert = "critical"  
    }
}

$disks = $getDisks | ConvertTo-Html -fragment -PreContent "<center><h2 id='discos'>Discos</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tabledisks')>Mostrar/Ocultar</button> </center>" | Out-String

# Adiciona classe nas tahs
$disks = $disks -replace "<td>low</td>", "<td class=green >OK</td>"
$disks = $disks -replace "<td>high</td>", "<td class=yellow >Your performance is require</td>"
$disks = $disks -replace "<td>critical</td>", "<td class=red >Your performance is extremely necessary</td>"
$disks = $disks -replace "<table>", "<table class='tabledisks'>"

######################### Discos (Storage detail) ####################################
######################### Discos (Storage detail) ####################################
######################### Discos (Storage detail) ####################################

$diskStorageDetail = get-PhysicalDisk | Select-Object DeviceId, MediaType, BusType, OperationalStatus, @{Label = "Size (GB)"; Expression = { “{0:N2}” -f ($_.Size / 1GB) } }, HealthStatus | 
ConvertTo-Html -fragment -PreContent "<center><h2 id='discostoragedetail'>Discos (Storage detail)</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablediskStorageDetail')>Mostrar/Ocultar</button> </center>" | Out-String
$diskStorageDetail = $diskStorageDetail -replace "<table>", "<table class='tablediskStorageDetail'>"

######################### Clusters e grupos ####################################
######################### Clusters e grupos ####################################
######################### Clusters e grupos ####################################

$clusterGroups = get-ClusterGroup

if (-Not $clusterGroups) {
    $clusterGroups = ConvertTo-Html -fragment -as table -PreContent "<center><h2>get-ClusterGroup is NOT installed</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tableOS')>Mostrar/Ocultar</button> </center>" |
    Out-String
}
else {
    $clusterGroups = get-ClusterGroup |
    ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='clustergroup'>Cluster Groups</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tableclusterGroups')>Mostrar/Ocultar</button> </center>" |
    Out-String

}
$clusterGroups = $clusterGroups -replace "<table>", "<table class='tableclusterGroups'>"

######################### Clusters node ####################################
######################### Clusters node ####################################
######################### Clusters node ####################################

$clusterNode = get-ClusterNode

if (-Not $clusterNode) {
    $clusterNode = ConvertTo-Html -fragment -as table -PreContent "<center><h2>get-ClusterNode is NOT installed</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tableOS')>Mostrar/Ocultar</button> </center>" |
    Out-String
}
else {
    $clusterNode = get-ClusterGroup |
    ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='clusternode'>Cluster Node</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tableclusterNode')>Mostrar/Ocultar</button> </center>" |
    Out-String
}

$clusterNode = $clusterNode -replace "<table>", "<table class='tableclusterNode'>"

######################### Servicos em execucao ####################################
######################### Servicos em execucao ####################################
######################### Servicos em execucao ####################################

$startsvc = Get-WmiObject -Class win32_service |
Where-Object { $_.State -eq "Running" } |
Select-Object Name, Caption, state, Description |
ConvertTo-Html -fragment -PreContent "<center><h2 id='servicosexecucao'>Servicos em EXECUCAO</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablestartsvc')>Mostrar/Ocultar</button> </center>" |
Out-String
$startsvc = $startsvc -replace "<table>", "<table class='tablestartsvc'>"

######################### Servicos PARADOS ####################################
######################### Servicos PARADOS ####################################
######################### Servicos PARADOS ####################################

$stopsvc = Get-WmiObject -Class win32_service |
Where-Object { $_.State -eq "Stopped" } |
Select-Object Name, Caption, state, Description |
ConvertTo-Html -fragment -PreContent "<center><h2 id='servicosparados'>Servicos PARADOS</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablestopsvc')>Mostrar/Ocultar</button> </center>" |
Out-String
$stopsvc = $stopsvc -replace "<table>", "<table class='tablestopsvc'>"

######################### Servicos parados que deveriam estar rodando ####################################
######################### Servicos parados que deveriam estar rodando ####################################
######################### Servicos parados que deveriam estar rodando ####################################

$stopAutomaticsvc = " "
$stopAutomaticsvc = Get-WmiObject -Class win32_service |
Where-Object { $_.StartMode -eq "Auto" -and $_.State -eq "Stopped" } |
Select-Object Name, state, Caption |                          
ConvertTo-Html -fragment -PreContent "<center><h2 id='servicosparadosautomatic'>Servicos parados (StartMode = Automatic)</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablestopAutomaticsvc')>Mostrar/Ocultar</button> </center>" |
Out-String
$stopAutomaticsvc = $stopAutomaticsvc -replace "<table>", "<table class='tablestopAutomaticsvc'>"

######################### HotFix ####################################
######################### HotFix ####################################
######################### HotFix ####################################

$hotfix = get-hotfix |
Select-Object Source, Description, HotFixID, InstalledBy, InstalledOn |
ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='hotfix'>Hot Fix</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablehotfix')>Mostrar/Ocultar</button> </center>" |
Out-String
$hotfix = $hotfix -replace "<table>", "<table class='tablehotfix'>"

######################### Rede detalhes ####################################
######################### Rede detalhes ####################################
######################### Rede detalhes ####################################

#Rede detalhes
$network = Get-WmiObject Win32_NetworkAdapterConfiguration | Where-Object { $_.IPAddress -ne $null } | Select-Object  index, DNSHostName, DHCPEnabled, ServiceName, Description, DHCPServer, @{Label = "DNS"; Expression = { $_.DNSServerSearchOrder -join ' - ' } }, @{Label = "IP Address"; Expression = { ($_.IPAddress[0]) } }, @{Label = "IPSubnet"; Expression = { ($_.IPSubnet[0]) } }, @{Label = "Default Gateway"; Expression = { ($_.DefaultIPGateway[0]) } }, MACAddress |
ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='rededetalhes'>Rede detalhes</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablenetwork')>Mostrar/Ocultar</button> </center>" |
Out-String
$network = $network -replace "<table>", "<table class='tablenetwork'>"

######################### Routes ####################################
######################### Routes ####################################
######################### Routes ####################################

$routes = Get-NetRoute | Select-Object InterfaceIndex, AddressFamily, DestinationPrefix, NextHop, InterfaceAlias, RouteMetric, ifMetric  |
ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='rotas'>Rotas</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tableroutes')>Mostrar/Ocultar</button> </center>" |
Out-String
$routes = $routes -replace "<table>", "<table class='tableroutes'>"

######################### Rotas persistentes ####################################
######################### Rotas persistentes ####################################
######################### Rotas persistentes ####################################

$routesDefualt = Get-CimInstance -ClassName Win32_IP4PersistedRouteTable | Select-Object @{Label = "Destination"; Expression = { $_.Destination } },
@{Label = "MASK"; Expression = { $_.Mask } },
@{Label = "NextHop"; Expression = { $_.NextHop } },
@{Label = "Metric"; Expression = { $_.Metric1 } } |
ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='persistenterotas'>Persistents Routes</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tableroutesdefaults')>Mostrar/Ocultar</button> </center>" |
Out-String

$routesDefualt = $routesDefualt -replace "<table>", "<table class='tableroutesdefaults'>"

######################### Usuarios locais ####################################
######################### Usuarios locais ####################################
######################### Usuarios locais ####################################

$localUsers = Get-LocalUser | Select-Object Name, Description, AccountExpires, Enabled, PasswordChangeable, PasswordExpires, UserMayChangePassword, PasswordRequired, LastLogon, PrincipalSource, ObjectClass |
ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='usuarioslocais'>Usuarios locais</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablelocalUsers')>Mostrar/Ocultar</button> </center>" |
Out-String
$localUsers = $localUsers -replace "<table>", "<table class='tablelocalUsers'>"

######################### Membros Administradores ####################################
######################### Membros Administradores ####################################
######################### Membros Administradores ####################################

$localGroupsAdm = Get-LocalGroupMember "Administrators" | Select-Object @{Label = "Type"; Expression = { $_.ObjectClass } },
@{Label = "Name"; Expression = { $_.Name } },
@{Label = "Source"; Expression = { $_.PrincipalSource } } |
ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='administrators'>Members 'Administrators' Group</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablelocalGroupsAdm')>Mostrar/Ocultar</button> </center>" |
Out-String

$localGroupsAdm = $localGroupsAdm -replace "<table>", "<table class='tablelocalGroupsAdm'>"

######################### Membros Remote Desktop Users ####################################
######################### Membros Remote Desktop Users ####################################
######################### Membros Remote Desktop Users ####################################

$localGroupsRemoteDesktopUsers = Get-LocalGroupMember "Remote Desktop Users" | Select-Object @{Label = "Type"; Expression = { $_.ObjectClass } },
@{Label = "Name"; Expression = { $_.Name } },
@{Label = "Source"; Expression = { $_.PrincipalSource } } |
ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='remotedesktopuser'>Members 'Remote Desktop Users' Group</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tablelocalGroupsRemoteDesktopUsers')>Mostrar/Ocultar</button> </center>" |
Out-String
$localGroupsRemoteDesktopUsers = $localGroupsRemoteDesktopUsers -replace "<table>", "<table class='tablelocalGroupsRemoteDesktopUsers'>"

######################### Softwares instalados ####################################
######################### Softwares instalados ####################################
######################### Softwares instalados ###################################

#$programs = Get-ItemProperty HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion, InstallDate | Sort-Object -Property DisplayName -Unique |

$programs = Get-Package | Select-Object Name, Version, ProviderName, Status |
ConvertTo-Html -fragment -as table -PreContent "<center><h2 id='softwaresinstalados'>Programas e features instalados</h2><button id=showhidebutton onclick=MostrarOcultarTabelas('tableprograms')>Mostrar/Ocultar</button> </center>" |
Out-String
$programs = $programs -replace "<table>", "<table class='tableprograms'>"

# Cria arquivo css
# gera alertas em javascript se encontrar string no corpo de cada fragmento html "Your performance is extremely necessary"


# Combina HTML
$final = ConvertTo-Html -Title "$COMPUTERNAME System Report" `
    -Head $style `
    -PreContent  "<h1>$COMPUTERNAME System Report</h1>" `
    -Body $htmlMenu, $os, $cpu, $cpuTopFiveProcess, $sessionsOpened, $ramMemory, $memoryTopFiveProcess, $GPU, $computer, $bios, $localUsers, $localGroupsAdm, $localGroupsRemoteDesktopUsers, $disks, $diskStorageDetail, $clusterGroups, $clusterNode, $stopsvc, $startsvc, $stopAutomaticsvc, $hotfix, $network, $routes, $routesDefualt, $programs`
         
return $final                        

